import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

/* reducers */
import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import appReducer from './app/reducer';
import analyticsReducer from './analytics/reducer';
/* reducers */

/* sagas */
import rootSagaAuth from './auth/saga';
import rootSagaUser from './user/saga';
import rootSagaAnalytics from './analytics/saga';
/* sagas */

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    app: appReducer,
    analytics: analyticsReducer,
  });

export const rootSaga = function* rootSaga() {
  yield all([rootSagaAuth(), rootSagaUser(), rootSagaAnalytics()]);
};
