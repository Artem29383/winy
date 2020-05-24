import { put, take, takeEvery, call, all } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  addPost,
  firebaseCreateUserPost,
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
import {
  setError,
  setLoader,
  setProgressUpload,
  setSuccess,
} from 'models/app/reducer';
import { API_PATH } from 'constants/constants';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { authRef, storage, storageRef } from 'src/firebase/firebase';
import { updateAvatar } from 'models/auth/reducer';
import { exportDefaultUserData } from 'utils/exportDefaultUserData';
import { getDate } from 'utils/getDate';
import { normalizer } from 'utils/normalizer';

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
    // fetch all data user
    const data = yield FireSaga.getCollection(API_PATH.users, httpUserId);
    // fetch all posts user
    const allPosts = yield FireSaga.getFullCollection(
      `${API_PATH.users}/${httpUserId}/posts`
    );
    const posts = allPosts.docs.map(doc => doc.data());
    const normalizedPosts = normalizer(posts, 'posts');
    const {
      login,
      status,
      details,
      avatarURL,
      htmlContent,
      lowAvatarURL,
    } = data.data();
    // fetch status online user
    const statusOnline = yield FireSaga.getCollection(
      API_PATH.status,
      httpUserId
    );
    const onliner = statusOnline.data() || {
      onlineStatus: false,
      last_changed: '',
    };
    // put all info in reducer user
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
        posts: {
          entities: normalizedPosts.entities.posts,
          ids: normalizedPosts.result.reverse(),
        },
      }),
    });
  } catch (e) {
    console.log(e);
  }
}

function* createPost({ payload }) {
  try {
    const { uid } = authRef.currentUser;
    const { postId, value, images } = payload;
    const imageCounts = images.length;
    const delta = 100 / imageCounts;
    let progress = 0;

    // Создаем массив саг
    const array = images.map(image => {
      const imageID = image.id;
      const { file } = image;
      const metadata = {
        contentType: file.type,
      };
      return call(function*() {
        const lowImageRef = yield storage
          .ref(`posts/${uid}/${postId}/${imageID}`)
          .put(file, metadata);
        progress += delta;
        yield put({
          type: setProgressUpload.type,
          payload: progress,
        });
        return { id: imageID, url: yield lowImageRef.ref.getDownloadURL() };
      });
    });
    // ждем завершения всех саг
    const urls = yield all(array);
    const post = {
      id: postId,
      value,
      images: urls,
      date: getDate(),
      likes: 0,
      dislikes: 0,
    };
    yield FireSaga.setToCollection(
      `${API_PATH.users}/${uid}/posts`,
      postId,
      post,
      true
    );
    yield put({
      type: addPost.type,
      payload: post,
    });
    yield put({
      type: setProgressUpload.type,
      payload: 0,
    });
    yield put({
      type: setSuccess.type,
      payload: 'Post created.',
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
  yield takeEvery(firebaseCreateUserPost, createPost);
}
