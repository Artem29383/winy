import React, { useEffect } from 'react';
import Container from 'components/Container';
import TextField from 'components/TextField/TextField';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import { NavLink } from 'react-router-dom';
import routes from 'constants/routes';
import useAction from 'hooks/useAction';
import { passReset } from 'models/auth/reducer';
import { setSuccess } from 'models/app/reducer';
import useFetchingError from 'hooks/useFetchingError';
import { ternaryCheckError } from 'utils/ternaryCheckError';
import useSelector from 'hooks/useSelector';
import { successMsgSelector } from 'models/app/selectors';
import S from './ResetPasswordPage.styled';

const ResetPasswordPage = () => {
  const { fetchError, resetError, isLoad, setIsLoading } = useFetchingError();
  const resetPassword = useAction(passReset);
  const setSuccessMsg = useAction(setSuccess);
  const successMsg = useSelector(successMsgSelector);
  const resetPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('This is not an email'),
  });

  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg('');
      }, 5000);
    }
  }, [successMsg]);

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
    validationSchema: resetPasswordSchema,
  });
  const watchEmail = watch('email');

  useEffect(() => {
    if (fetchError.trim()) {
      resetError();
    }
  }, [watchEmail]);

  const resetPass = async data => {
    setIsLoading(true);
    resetPassword(data.email);
  };

  return (
    <Container maxWidth="800">
      <S.Form onSubmit={handleSubmit(resetPass)}>
        <S.InputWrapper>
          <S.Text>Reset password</S.Text>
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
          <Button className="center" isLoader>
            {ternaryCheckError(isLoad, fetchError, 'Reset')}
          </Button>
        </S.InputWrapper>
        <S.InputWrapper>
          <NavLink to={routes.auth}>
            <S.Text className="link">Log in?</S.Text>
          </NavLink>
        </S.InputWrapper>
        {successMsg && (
          <S.InputWrapper>
            <S.Success>{successMsg}</S.Success>
          </S.InputWrapper>
        )}
        {fetchError && (
          <S.InputWrapper>
            <S.Error>{fetchError}</S.Error>
          </S.InputWrapper>
        )}
      </S.Form>
    </Container>
  );
};

export default ResetPasswordPage;
