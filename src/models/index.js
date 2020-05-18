import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

/* reducers */
import userReducer from './user/reducer';
/* reducers */

/* sagas */
import rootSagaAuth from './user/sagaAuth';
import rootSagaUser from './user/sagaUserProfile';
/* sagas */

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });

export const rootSaga = function* rootSaga() {
  yield all([rootSagaAuth(), rootSagaUser()]);
};
