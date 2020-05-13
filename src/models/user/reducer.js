import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  isAuth: false,
  email: null,
  uid: null,
  isAdmin: false,
  login: null,
  isInit: false,
  isLoading: false,
  error: {
    message: '',
    idError: '',
  },
  successMsg: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoader(state, { payload }) {
      state.isLoading = payload;
    },
    setError(state, { payload }) {
      const { message, idError } = payload;
      state.error = {
        message,
        idError,
      };
    },
    logoutUser(state) {
      Object.assign(state, { ...initialState, isInit: true });
    },
    registerSuccess(state, { payload }) {
      state.successMsg = payload;
    },
    loginUserFailure(state, { payload }) {
      state.msgError = payload;
    },
    loginUserSuccess(state, { payload }) {
      Object.assign(state, payload);
    },
    setInit(state, { payload }) {
      state.isInit = payload;
    },
    checkAuthUser: state => state,
    loginUser: state => state,
    registerUser: state => state,
    logOutUser: state => state,
    passReset: state => state,
  },
});

export default userReducer.reducer;
export const {
  logOutUser,
  loginUser,
  setError,
  registerSuccess,
  setLoader,
  passReset,
  loginUserSuccess,
  checkAuthUser,
  setInit,
  logoutUser,
  registerUser,
} = userReducer.actions;
