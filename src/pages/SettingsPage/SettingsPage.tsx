import React, { useCallback, useEffect } from 'react';
import Button from 'components/Button';
import TextField from 'components/TextField';
import ThemesIcon from 'assets/images/Icons.styled';
import * as yup from 'yup';
import useSelector from 'hooks/useSelector';
import useAction from 'hooks/useAction';
import sun from 'assets/images/sun.svg';
import moon from 'assets/images/moon.svg';
import { themeChangeHandle } from 'models/app/reducer';
import { themeSelector } from 'models/app/selectors';
import S from 'pages/SettingsPage/SettingsPage.styled';
import { initialUserDataSelector } from 'models/auth/selectors';
import { useForm } from 'react-hook-form';
import { firebaseSetNewUserSetting } from 'models/auth/reducer';
import useFetchingError from 'hooks/useFetchingError';
import { ternaryCheckError } from 'utils/ternaryCheckError';

type IDataProps = {
  login: string;
};

const SettingsPage: React.FC = () => {
  const setTheme = useAction(themeChangeHandle);
  const theme = useSelector(themeSelector);
  const { login } = useSelector(initialUserDataSelector);
  const setSetting = useAction(firebaseSetNewUserSetting);
  const { fetchError, isLoad, setIsLoading } = useFetchingError();

  const settingSchema = yup.object().shape({
    login: yup
      .string()
      .required('login cannot be empty')
      .max(50, 'Max symbols 50'),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      login,
    },
    validationSchema: settingSchema,
  });

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  const saveSettings = (data: IDataProps): void => {
    if (data.login !== login) {
      setIsLoading(true);
      setSetting(data);
    }
  };

  const themeHandle = useCallback(() => {
    const themeNow = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', themeNow);
    setTheme(themeNow);
  }, [theme]);

  return (
    <S.Content>
      <S.Header>
        <S.Title>
          Settings
          <S.Theme themeNow={theme} onClick={themeHandle}>
            {theme === 'dark' ? (
              <ThemesIcon.Sun>
                <use xlinkHref={`${sun}#sun`} />
              </ThemesIcon.Sun>
            ) : (
              <ThemesIcon.Moon>
                <use xlinkHref={`${moon}#moon`} />
              </ThemesIcon.Moon>
            )}
          </S.Theme>
        </S.Title>
        <S.Save>
          <Button
            className="yellow"
            onClickHandler={handleSubmit(saveSettings)}
            isLoader
          >
            {ternaryCheckError(isLoad, fetchError, 'Save')}
          </Button>
        </S.Save>
      </S.Header>
      <S.Body>
        <S.UserInfo>
          <S.InputWrapper>
            <TextField
              name="login"
              errors={errors.login}
              register={register}
              className="settings"
              label="Login"
            />
          </S.InputWrapper>
        </S.UserInfo>
      </S.Body>
    </S.Content>
  );
};

export default SettingsPage;
