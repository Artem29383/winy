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
import {
  authRef,
  databaseRef,
  // eslint-disable-next-line no-unused-vars
  database,
  firestoreRef,
  firestore,
  functionsRef,
} from 'src/firebase/firebase';
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

  useEffect(() => {
    if (isInit) {
      const { uid } = authRef.currentUser;
      const userStatusDatabaseRef = databaseRef.ref(`/status/${uid}`);
      const userStatusFirestoreRef = firestoreRef.doc(`/status/${uid}`);

      const isOfflineForDatabase = {
        state: 'offline',
        last_changed: database.ServerValue.TIMESTAMP,
      };

      const isOnlineForDatabase = {
        state: 'online',
        last_changed: database.ServerValue.TIMESTAMP,
      };

      const isOfflineForFirestore = {
        state: 'offline',
        last_changed: firestore.FieldValue.serverTimestamp(),
      };

      const isOnlineForFirestore = {
        state: 'online',
        last_changed: firestore.FieldValue.serverTimestamp(),
      };

      databaseRef.ref('.info/connected').on('value', snapshot => {
        if (snapshot.val() === false) {
          userStatusFirestoreRef.set(isOfflineForFirestore);
          return;
        }

        userStatusDatabaseRef
          .onDisconnect()
          .set(isOfflineForDatabase)
          .then(() => {
            functionsRef.httpsCallable('onUserStatusChanged');
            userStatusDatabaseRef.set(isOnlineForDatabase);
            userStatusFirestoreRef.set(isOnlineForFirestore);
          });
      });

      firestoreRef
        .collection('status')
        .where('state', '==', 'online')
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              const msg = `User ${change.doc.id} is online.`;
              console.log(msg);
              functionsRef.httpsCallable('onUserStatusChanged');
            }
            if (change.type === 'removed') {
              const msg = `User ${change.doc.id} is offline.`;
              console.log(msg);
              functionsRef.httpsCallable('onUserStatusChanged');
            }
          });
        });
    }
  }, [isInit]);

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
