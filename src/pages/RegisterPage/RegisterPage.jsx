import React, { useEffect } from 'react';
import * as yup from 'yup';
import Container from 'components/Container';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import routes from 'constants/routes';
import { useForm } from 'react-hook-form';
import { loginUser, registerSuccess, setError } from 'models/user/reducer';
import useAction from 'hooks/useAction';
import { errorSelector, successMsgSelector } from 'models/user/selectors';
import useSelector from 'hooks/useSelector';
import S from './RegisterPage.styled';

const RegisterPage = () => {
  const registerUser = useAction(loginUser);
  const setSuccessMsg = useAction(registerSuccess);
  const successMsg = useSelector(successMsgSelector);
  const errorSet = useAction(setError);
  const fetchError = useSelector(errorSelector);
  const registerSchema = yup.object().shape({
    login: yup.string().required('login is required'),
    email: yup
      .string()
      .required('email is required')
      .email('is not email'),
    password: yup
      .string()
      .required('password is required')
      .min(6, 'min length 6'),
    confirm: yup.string().required('confirm is required'),
  });

  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: 'onSubmit',
    validationSchema: registerSchema,
  });
  const watchEmail = watch('email');
  const watchLogin = watch('login');
  const watchPassword = watch('password');
  const watchConfirm = watch('confirm');

  useEffect(() => {
    if (fetchError.message.trim()) {
      errorSet({
        message: '',
        idError: '',
      });
    }
  }, [watchConfirm, watchPassword, watchLogin, watchEmail]);

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg('');
      }, 5000);
    }
  }, [successMsg]);

  const registration = async data => {
    const { login, email, password, confirm } = data;
    if (password !== confirm) {
      errorSet({
        message: 'password not confirm',
        idError: 'notConfirm',
      });
    } else {
      registerUser({ login, email, password });
      reset();
    }
    // const regResponse = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password);
    // const newFieldInBd = await firebase
    //   .firestore()
    //   .collection('users')
    //   .add({
    //     login,
    //     email,
    //   });
    // console.log(regResponse);
    // console.log(newFieldInBd);
  };

  return (
    <Container maxWidth="800">
      <S.Form
        onSubmit={handleSubmit(registration)}
        className={fetchError.message && 'error'}
      >
        <S.InputWrapper>
          <S.Text>Create an account</S.Text>
        </S.InputWrapper>
        <S.InputWrapper>
          <TextField
            label="Логин"
            name="login"
            errors={errors.login}
            register={register}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <TextField
            label="Email"
            name="email"
            errors={errors.email}
            register={register}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <TextField
            label="Password"
            name="password"
            type="password"
            errors={errors.password}
            register={register}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <TextField
            label="Confirm"
            name="confirm"
            type="password"
            errors={errors.confirm}
            register={register}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <Button className="center">Create</Button>
        </S.InputWrapper>
        {fetchError.message && (
          <S.InputWrapper>
            <S.Error>{fetchError.message}</S.Error>
          </S.InputWrapper>
        )}
        {successMsg && (
          <S.InputWrapper>
            <S.Success>{successMsg}</S.Success>
          </S.InputWrapper>
        )}
        <S.InputWrapper>
          <NavLink to={routes.auth}>
            <S.Text className="link">Already have an account?</S.Text>
          </NavLink>
        </S.InputWrapper>
      </S.Form>
    </Container>
  );
};

export default RegisterPage;
