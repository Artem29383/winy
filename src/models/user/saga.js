import { put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  firebaseGetUserInfo,
  firebaseUpdateStatus,
  firebaseUploadAvatarUser,
  firebaseUploadDetails,
  setNewAvatar,
  setUserAboutContent,
  setUserContent,
  setUserDetails,
  setUserInfo,
  updateStatus,
} from 'models/user/reducer';
import { setError, setLoader, setProgressUpload } from 'models/app/reducer';
import { API_PATH } from 'constants/constants';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { authRef, storage, storageRef } from 'src/firebase/firebase';
import { updateAvatar } from 'models/auth/reducer';
import { exportDefaultUserData } from 'utils/exportDefaultUserData';

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
  const { image, lowImage } = action.payload;
  const { uid } = authRef.currentUser;
  const metadata = {
    contentType: image.type,
  };

  // upload low quality image
  const lowImageRef = yield storage
    .ref(`lowAvatars/${uid}`)
    .put(lowImage, metadata);
  const lowUrl = yield lowImageRef.ref.getDownloadURL();
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
          { avatarURL: url, lowAvatarURL: lowUrl },
          true
        );
        yield put({
          type: setNewAvatar.type,
          payload: { url, lowUrl },
        });
        yield put({
          type: updateAvatar.type,
          payload: lowUrl,
        });
        yield put({
          type: setProgressUpload.type,
          payload: 0,
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

function* getUserInfo(action) {
  try {
    const { uid } = authRef.currentUser;
    const httpUserId = action.payload;
    const isOwner = uid === httpUserId;
    const data = yield FireSaga.getCollection(API_PATH.users, httpUserId);
    const {
      login,
      status,
      details,
      avatarURL,
      htmlContent,
      lowAvatarURL,
    } = data.data();
    const statusOnline = yield FireSaga.getCollection(
      API_PATH.status,
      httpUserId
    );
    const onliner = statusOnline.data() || {
      onlineStatus: false,
      last_changed: '',
    };
    yield put({
      type: setUserInfo.type,
      payload: exportDefaultUserData({
        uid: httpUserId,
        ...onliner,
        login,
        isOwner,
        status,
        avatarURL,
        lowAvatarURL,
        htmlContent,
        details,
      }),
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSagaUser() {
  yield takeEvery(firebaseUpdateStatus, statusUpdate);
  yield takeEvery(firebaseUploadAvatarUser, avatarUpload);
  yield takeEvery(setUserAboutContent, uploadUserContent);
  yield takeEvery(firebaseUploadDetails, uploadDetailsUser);
  yield takeEvery(firebaseGetUserInfo, getUserInfo);
}
