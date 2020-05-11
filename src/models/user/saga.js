// eslint-disable-next-line no-unused-vars
import { call, takeEvery, put } from 'redux-saga/effects';
import { loginUser, registerSuccess, setError } from 'models/user/reducer';
import { authRef } from '../../firebase/firebase';

function* signIn(action) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { login, email, password } = action.payload;
    // eslint-disable-next-line no-unused-vars
    const response = yield authRef.createUserWithEmailAndPassword(
      email,
      password
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
}

export default function* rootSagaAuth() {
  yield takeEvery(loginUser, signIn);
}
