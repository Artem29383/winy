import React, { useEffect } from 'react';
import * as yup from 'yup';
import Container from 'components/Container';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import routes from 'constants/routes';
import { useForm } from 'react-hook-form';
import { registerSuccess, registerUser } from 'models/auth/reducer';
import useAction from 'hooks/useAction';
import { successMsgSelector } from 'models/app/selectors';
import useSelector from 'hooks/useSelector';
import useFetchingError from 'hooks/useFetchingError';
import { ternaryCheckError } from 'utils/ternaryCheckError';
import S from './RegisterPage.styled';

const RegisterPage = () => {
  const userRegister = useAction(registerUser);
  const setSuccessMsg = useAction(registerSuccess);
  const successMsg = useSelector(successMsgSelector);
  const {
    fetchError,
    resetError,
    isLoad,
    setIsLoading,
    setErrorHandle,
  } = useFetchingError();
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
    if (fetchError.trim()) {
      resetError();
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
      setErrorHandle('password not confirm', 'notConfirm');
    } else {
      userRegister({ login, email, password });
      reset();
      setIsLoading(true);
    }
  };

  return (
    <Container maxWidth="800">
      <S.Form
        onSubmit={handleSubmit(registration)}
        className={fetchError && 'error'}
      >
        <S.InputWrapper>
          <S.Text>Create an account</S.Text>
        </S.InputWrapper>
        <S.InputWrapper>
          <TextField
            label="Login"
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
          <Button className="center" isLoader>
            {ternaryCheckError(isLoad, fetchError, 'Create')}
          </Button>
        </S.InputWrapper>
        {fetchError && (
          <S.InputWrapper>
            <S.Error>{fetchError}</S.Error>
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
