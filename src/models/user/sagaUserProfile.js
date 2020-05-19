import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  firebaseUpdateStatus,
  firebaseUploadAvatarUser,
  firebaseUploadDetails,
  setError,
  setLoader,
  setNewAvatar,
  setProgressUpload,
  setUserAboutContent,
  setUserContent,
  setUserDetails,
  updateStatus,
} from 'models/user/reducer';
import { API_PATH } from 'constants/constants';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { authRef, storageRef } from 'src/firebase/firebase';

function* statusUpdate(action) {
  try {
    const { status } = action.payload;
    const { uid } = authRef.currentUser;
    yield FireSaga.setToCollection(API_PATH.users, uid, { status }, true);
    yield put({
      type: updateStatus.type,
      payload: status,
    });
  } catch (e) {
    console.log(e);
  }
}

function* avatarUpload(action) {
  const { image } = action.payload;
  const { uid } = authRef.currentUser;
  const metadata = {
    contentType: image.type,
  };
  // create reference upload image (see docs firebase)
  const uploadTask = storageRef.child(`avatars/${uid}`).put(image, metadata);
  // create emit channel, he returned progress bar upload file and his url in the end
  const channel = eventChannel(emit =>
    uploadTask.on(
      'state_changed',
      emit,
      error => {
        emit(error);
      },
      () => emit(uploadTask.snapshot.ref.getDownloadURL())
    )
  );
  while (true) {
    try {
      // take info from channel
      const snapshot = yield take(channel);
      // if state === 'running' then me get progress status file else get url and do dispatch
      if (snapshot.state === 'running') {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        yield put({
          type: setProgressUpload.type,
          payload: progress,
        });
      } else {
        const url = yield snapshot;
        yield FireSaga.setToCollection(
          API_PATH.users,
          uid,
          { avatarURL: url },
          true
        );
        yield put({
          type: setNewAvatar.type,
          payload: url,
        });
        yield put({
          type: setLoader.type,
          payload: false,
        });
      }
    } catch (e) {
      yield put({
        type: setError.type,
        payload: {
          message: e.message,
          idError: 'uploadImage',
        },
      });
    }
  }
}

function* uploadUserContent(action) {
  try {
    const { htmlContent } = action.payload;
    const { uid } = yield authRef.currentUser;
    yield FireSaga.setToCollection(API_PATH.users, uid, { htmlContent }, true);
    yield put({
      type: setUserContent.type,
      payload: htmlContent,
    });
  } catch (e) {
    yield put({
      type: setError.type,
      payload: {
        message: e.message,
        idError: 'uploadContentError',
      },
    });
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

function* uploadDetailsUser(action) {
  try {
    const { id, field, text } = action.payload;
    const details = {
      [id]: { field, text },
    };
    const { uid } = yield authRef.currentUser;
    yield FireSaga.setToCollection(API_PATH.users, uid, { details }, true);
    yield put({
      type: setUserDetails.type,
      payload: { id, field, text },
    });
  } catch (e) {
    console.log(e);
  }
  yield put({
    type: setLoader.type,
    payload: false,
  });
}

export default function* rootSagaUser() {
  yield takeEvery(firebaseUpdateStatus, statusUpdate);
  yield takeEvery(firebaseUploadAvatarUser, avatarUpload);
  yield takeEvery(setUserAboutContent, uploadUserContent);
  yield takeEvery(firebaseUploadDetails, uploadDetailsUser);
}
