import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  checkAuthUser,
  loginUser,
  loginUserSuccess,
  logoutUser,
  logOutUser,
  passReset,
  registerUser,
  setInit,
} from 'models/auth/reducer';
import { resetAll, setError, setLoader, setSuccess } from 'models/app/reducer';
import { API_PATH } from 'constants/constants';
import { push } from 'connected-react-router';
import routes from 'constants/routes';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { authRef, firestore } from 'src/firebase/firebase';
import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';
import { resetUser } from 'models/user/reducer';

function* signIn(action) {
  try {
    const { login, email, password } = action.payload;
    // Create auth account
    const { user } = yield authRef.createUserWithEmailAndPassword(
      email,
      password
    );
    // set admin access
    // yield setAdminAccess(email);
    // Create auth collection with uniq auth ID
    yield FireSaga.setToCollection(
      API_PATH.users,
      user.uid,
      { login, email },
      true
    );
    // logOut auth, idk why firebase autologin me
    yield authRef.signOut();
    yield put({
      type: setSuccess.type,
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
      type: setSuccess.type,
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
    const { email, login } = data;
    if (user) {
      yield put({
        type: loginUserSuccess.type,
        payload: {
          email,
          login,
          isAdmin: idTokenResult.admin || false,
          isAuth: true,
          uid: user.uid,
          avatarURL: data.lowAvatarURL || defaultUserPhoto,
        },
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
      payload: {
        email,
        login: data.login,
        isAdmin: idTokenResult.admin || false,
        isAuth: true,
        uid: user.uid,
        avatarURL: data.lowAvatarURL || defaultUserPhoto,
      },
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
    const { uid } = authRef.currentUser;
    const lastChanged = firestore.FieldValue.serverTimestamp();
    yield FireSaga.setToCollection(
      API_PATH.status,
      uid,
      { onlineStatus: false, last_changed: lastChanged },
      true
    );
    yield authRef.signOut();
    yield put({
      type: logoutUser.type,
    });
    yield put({
      type: resetUser.type,
    });
    yield put({
      type: resetAll.type,
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
