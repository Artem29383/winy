import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  isAuth: false,
  email: null,
  uid: null,
  isAdmin: false,
  login: null,
  avatarURL: '',
  isInit: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAvatar(state, { payload }) {
      state.avatarURL = payload;
    },
    logoutUser(state) {
      Object.assign(state, { ...initialState, isInit: true });
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

export default authReducer.reducer;
export const {
  logOutUser,
  loginUser,
  passReset,
  checkAuthUser,
  loginUserSuccess,
  setInit,
  logoutUser,
  updateAvatar,
  registerUser,
} = authReducer.actions;
