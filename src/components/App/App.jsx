import React, { useCallback, useEffect, useState } from 'react';
import AppRoutes from 'components/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/themes';
import sun from 'assets/images/sun.svg';
import moon from 'assets/images/moon.svg';
import ThemesIcon from 'assets/images/Icons.styled';
import useInit from 'hooks/useInit';
import { GlobalStyles } from 'styles/index';
import CommonLoader from 'components/CommonLoader';
import useSelector from 'hooks/useSelector';
import { isAuthSelector } from 'models/user/selectors';
import Header from 'components/Header';
import S from './App.styled';

const App = () => {
  const isInit = useInit();
  const isAuth = useSelector(isAuthSelector);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  const themeHandle = useCallback(() => {
    const themeNow = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', themeNow);
    setTheme(themeNow);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyles />
      {isInit ? (
        <S.Content isAuth={isAuth}>
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
          {isAuth && <Header />}
          <AppRoutes />
        </S.Content>
      ) : (
        <CommonLoader />
      )}
    </ThemeProvider>
  );
};

export default App;
