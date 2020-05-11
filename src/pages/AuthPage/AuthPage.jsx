import React from 'react';
import Container from 'components/Container';
import TextField from 'components/TextField';
import Button from 'components/Button/Button';
import { NavLink } from 'react-router-dom';
import routes from 'constants/routes';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import S from './AuthPage.styled';

const AuthPage = () => {
  const authSchema = yup.object().shape({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
  });

  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
    validationSchema: authSchema,
  });

  const auth = data => {
    console.log(data);
  };

  return (
    <Container maxWidth="800">
      <S.Form onSubmit={handleSubmit(auth)}>
        <S.InputWrapper>
          <S.Text>Authorization</S.Text>
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
          <Button className="center">Log in</Button>
        </S.InputWrapper>
        <S.InputWrapper>
          <NavLink to={routes.register}>
            <S.Text className="link">Create a new account?</S.Text>
          </NavLink>
        </S.InputWrapper>
      </S.Form>
    </Container>
  );
};

export default AuthPage;
