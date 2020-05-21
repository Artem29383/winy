import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

/* reducers */
import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import appReducer from './app/reducer';
/* reducers */

/* sagas */
import rootSagaAuth from './auth/saga';
import rootSagaUser from './user/saga';
/* sagas */

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer,
    app: appReducer,
  });

export const rootSaga = function* rootSaga() {
  yield all([rootSagaAuth(), rootSagaUser()]);
};
