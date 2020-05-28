import React, { useEffect } from 'react';
import AppRoutes from 'components/AppRoutes';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/themes';
import useInit from 'hooks/useInit';
import { GlobalStyles } from 'styles/index';
import CommonLoader from 'components/CommonLoader';
import useSelector from 'hooks/useSelector';
import { isAuthSelector } from 'models/auth/selectors';
import Header from 'components/Header';
import {
  authRef,
  databaseRef,
  database,
  firestoreRef,
  firestore,
  functionsRef,
} from 'src/firebase/firebase';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { API_PATH } from 'constants/constants';
import { themeSelector } from 'models/app/selectors';
import S from './App.styled';

const App = () => {
  const isInit = useInit();
  const isAuth = useSelector(isAuthSelector);
  const theme = useSelector(themeSelector);

  useEffect(() => {
    const user = authRef.currentUser;
    if (!user) return;
    const { uid } = user;
    const userStatusDatabaseRef = databaseRef.ref(`/status/${uid}`);

    const isOfflineForDatabase = {
      onlineStatus: false,
      last_changed: database.ServerValue.TIMESTAMP,
    };

    const isOnlineForDatabase = {
      onlineStatus: true,
      last_changed: database.ServerValue.TIMESTAMP,
    };

    const isOfflineForFirestore = {
      onlineStatus: false,
      last_changed: firestore.FieldValue.serverTimestamp(),
    };

    const isOnlineForFirestore = {
      onlineStatus: true,
      last_changed: firestore.FieldValue.serverTimestamp(),
    };

    databaseRef.ref('.info/connected').on('value', snapshot => {
      if (snapshot.val() === false) {
        FireSaga.setToCollection(
          API_PATH.status,
          uid,
          isOfflineForFirestore,
          true
        );
        return;
      }

      userStatusDatabaseRef
        .onDisconnect()
        .set(isOfflineForDatabase)
        .then(() => {
          userStatusDatabaseRef.set(isOnlineForDatabase);
          FireSaga.setToCollection(
            API_PATH.status,
            uid,
            isOnlineForFirestore,
            true
          );
        });
    });

    firestoreRef
      .collection('status')
      .where('onlineStatus', '==', true)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            functionsRef.httpsCallable('onUserStatusChanged');
          }
          if (change.type === 'removed') {
            functionsRef.httpsCallable('onUserStatusChanged');
          }
        });
      });
  }, [isAuth]);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyles />
      {isInit ? (
        <S.Content isAuth={isAuth}>
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
