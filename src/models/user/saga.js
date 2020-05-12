import { takeEvery, put } from 'redux-saga/effects';
import {
  loginUser,
  passReset,
  registerSuccess,
  setError,
  setLoader,
} from 'models/user/reducer';
import { API_PATH } from 'constants/constants';
import { nanoid } from '@reduxjs/toolkit';
import { authRef, firestoreRef } from '../../firebase/firebase';

function* signIn(action) {
  try {
    const { login, email, password } = action.payload;
    yield authRef.createUserWithEmailAndPassword(email, password);
    yield firestoreRef
      .collection(API_PATH.users)
      .doc(nanoid())
      .set(
        {
          login,
          email,
        },
        { merge: true }
      );
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
    console.log(e.message);
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
  yield takeEvery(loginUser, signIn);
  yield takeEvery(passReset, resetPassword);
}
