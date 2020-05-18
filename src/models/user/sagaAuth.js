import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  checkAuthUser,
  loginUser,
  loginUserSuccess,
  logoutUser,
  logOutUser,
  passReset,
  registerSuccess,
  registerUser,
  setError,
  setInit,
  setLoader,
} from 'models/user/reducer';
import { API_PATH } from 'constants/constants';
import { push } from 'connected-react-router';
import routes from 'constants/routes';
import { exportDefaultUserData } from 'utils/exportDefaultUserData';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { authRef } from '../../firebase/firebase';

function* signIn(action) {
  try {
    const { login, email, password } = action.payload;
    // Create user account
    const { user } = yield authRef.createUserWithEmailAndPassword(
      email,
      password
    );
    // set admin access
    // yield setAdminAccess(email);
    // Create user collection with uniq user ID
    yield FireSaga.setToCollection(
      API_PATH.users,
      user.uid,
      { login, email },
      true
    );
    // logOut user, idk why firebase autologin me
    yield authRef.signOut();
    yield put({
      type: registerSuccess.type,
      payload: 'Account is ready.',
    });
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'serverError',
      },
    });
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

function* resetPassword(action) {
  try {
    yield authRef.sendPasswordResetEmail(action.payload);
    yield put({
      type: registerSuccess.type,
      payload: 'Reset email sent to email.',
    });
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'serverError',
      },
    });
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

function* checkLoginUser() {
  try {
    // first create your eventChannel
    const authEventsChannel = eventChannel(emit => {
      // return a function that can be used to unregister listeners when the saga is cancelled
      return authRef.onAuthStateChanged(user => {
        emit({ user });
      });
    });
    const { user } = yield take(authEventsChannel);
    const idTokenResult = yield user.getIdTokenResult();
    const doc = yield FireSaga.getCollection(API_PATH.users, user.uid);
    const data = doc.data();
    if (user) {
      yield put({
        type: loginUserSuccess.type,
        payload: exportDefaultUserData(idTokenResult.claims, data),
      });
    } else {
      yield put(push(routes.auth));
    }
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'serverError',
      },
    });
  }
  yield put({
    type: setInit.type,
    payload: true,
  });
}

function* userAuth(action) {
  try {
    const { email, password } = action.payload;
    const { user } = yield authRef.signInWithEmailAndPassword(email, password);
    const idTokenResult = yield user.getIdTokenResult();
    const doc = yield FireSaga.getCollection(API_PATH.users, user.uid);
    const data = doc.data();
    yield put({
      type: loginUserSuccess.type,
      payload: exportDefaultUserData(idTokenResult.claims, data),
    });
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'serverError',
      },
    });
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

function* userLogOut() {
  try {
    yield authRef.signOut();
    yield put({
      type: logoutUser.type,
    });
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'serverError',
      },
    });
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

export default function* rootSagaAuth() {
  yield takeEvery(registerUser, signIn);
  yield takeEvery(passReset, resetPassword);
  yield takeEvery(checkAuthUser, checkLoginUser);
  yield takeEvery(loginUser, userAuth);
  yield takeEvery(logOutUser, userLogOut);
}
