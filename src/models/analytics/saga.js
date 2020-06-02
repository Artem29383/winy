import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  changeTotalLikesAnalytics,
  firebaseGetAllLikesAnalytics,
  firebaseRemoveExtraKeysAllLikesAnalytics,
  firebaseTotalLikesAnalytics,
  putLikesAnalyticsData,
} from 'models/analytics/reducer';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { API_PATH } from 'constants/constants';
import { convertDataToMS } from 'utils/convertDataToMS';
import { authRef, firestore } from 'src/firebase/firebase';
import { createDataNow } from 'utils/createDataNow';

function* updateLikesAnalytics({ payload }) {
  try {
    const { totalLikes, userId } = payload;
    const id = convertDataToMS();
    const dataNow = createDataNow();
    yield FireSaga.setToCollection(
      API_PATH.likesAnalytics,
      userId,
      { [id]: { totalLikes, dataNow } },
      true
    );
    yield put({
      type: changeTotalLikesAnalytics.type,
      payload: {
        id,
        totalLikes,
        dataNow,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

function* getAllLikesAnalytics() {
  try {
    const { uid } = authRef.currentUser;
    const data = yield FireSaga.getCollection(API_PATH.likesAnalytics, uid);
    const allData = data.data() || {
      [convertDataToMS(createDataNow)]: {
        totalLikes: 0,
        dataNow: createDataNow(),
      },
    };
    yield put({
      type: putLikesAnalyticsData.type,
      payload: {
        allData,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

// eslint-disable-next-line require-yield
function* removeExtraKeys({ payload }) {
  try {
    const { uid } = authRef.currentUser;
    const removeFields = payload.map(id => {
      return call(function*() {
        yield FireSaga.setToCollection(
          `${API_PATH.likesAnalytics}`,
          uid,
          {
            [id]: firestore.FieldValue.delete(),
          },
          true
        );
      });
    });
    yield all(removeFields);
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSagaAnalytics() {
  yield takeEvery(firebaseTotalLikesAnalytics, updateLikesAnalytics);
  yield takeEvery(firebaseGetAllLikesAnalytics, getAllLikesAnalytics);
  yield takeEvery(firebaseRemoveExtraKeysAllLikesAnalytics, removeExtraKeys);
}
