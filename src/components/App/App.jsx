import React, { useCallback, useState } from 'react';
import AppRoutes from 'components/AppRoutes';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { dark, light } from 'styles/colors';
import sun from 'assets/images/sun.svg';
import moon from 'assets/images/moon.svg';
import ThemesIcon from 'assets/images/Icons.styled';
import S from './App.styled';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeHandle = useCallback(() => {
    const themeNow = theme === 'dark' ? 'light' : 'dark';
    setTheme(themeNow);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <S.Content>
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
        <AppRoutes />
      </S.Content>
    </ThemeProvider>
  );
};

export default App;
