import { put, takeEvery } from 'redux-saga/effects';
import {
  changeTotalLikesAnalytics,
  firebaseGetAllLikesAnalytics,
  firebaseTotalLikesAnalytics,
  putLikesAnalyticsData,
} from 'models/analytics/reducer';
import { FireSaga } from 'utils/sagaFirebaseHelpers';
import { API_PATH } from 'constants/constants';
import { convertDataToMS } from 'utils/convertDataToMS';
import { authRef } from 'src/firebase/firebase';
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
    const allData = data.data();
    let labels = [];
    let dataGraph = [];
    let dates = [];
    if (allData) {
      labels = Object.keys(data.data());
      dataGraph = labels.map(id => allData[id].totalLikes);
      dates = labels.map(id => allData[id].dataNow);
    }
    yield put({
      type: putLikesAnalyticsData.type,
      payload: {
        labels,
        dataGraph,
        dates,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSagaAnalytics() {
  yield takeEvery(firebaseTotalLikesAnalytics, updateLikesAnalytics);
  yield takeEvery(firebaseGetAllLikesAnalytics, getAllLikesAnalytics);
}
