import React from 'react';
import * as yup from 'yup';
import Container from 'components/Container';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import routes from 'constants/routes';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line no-unused-vars
import firebase from '../../firebase/firebase';
import S from './RegisterPage.styled';

const RegisterPage = () => {
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

  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onSubmit',
    validationSchema: registerSchema,
  });

  const registration = async data => {
    // eslint-disable-next-line no-unused-vars
    const { login, email, password, confirm } = data;
    if (password !== confirm) {
      console.log('password not confirm');
    } else {
      console.log('registration');
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
      <S.Form onSubmit={handleSubmit(registration)}>
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
