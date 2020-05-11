import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    isAdmin: false,
    login: '',
    isInit: false,
    error: {
      message: '',
      idError: '',
    },
    successMsg: '',
  },
  reducers: {
    setError(state, { payload }) {
      const { message, idError } = payload;
      state.error = {
        message,
        idError,
      };
    },
    logoutUser(state) {
      state.isAuth = false;
      state.login = '';
      state.isAdmin = false;
      state.msgError = '';
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
    logOutUser: state => state,
  },
});

export default userReducer.reducer;
export const { loginUser, setError, registerSuccess } = userReducer.actions;
