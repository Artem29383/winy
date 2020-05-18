import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  isAuth: false,
  user: {
    email: null,
    uid: null,
    isAdmin: false,
    login: null,
    status: '',
    avatarURL: '',
    about: {
      aboutUser: '',
    },
  },
  isInit: false,
  isLoading: false,
  progressUpload: 0,
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
    updateStatus(state, { payload }) {
      state.user.status = payload;
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
    setNewAvatar(state, { payload }) {
      state.user.avatarURL = payload;
    },
    setProgressUpload(state, { payload }) {
      state.progressUpload = payload;
    },
    setUserContent(state, { payload }) {
      state.user.about.aboutUser = payload;
    },
    setUserAboutContent: state => state,
    checkAuthUser: state => state,
    loginUser: state => state,
    registerUser: state => state,
    logOutUser: state => state,
    passReset: state => state,
    firebaseUpdateStatus: state => state,
    firebaseUploadAvatarUser: state => state,
  },
});

export default userReducer.reducer;
export const {
  setUserAboutContent,
  logOutUser,
  loginUser,
  setError,
  registerSuccess,
  setLoader,
  passReset,
  loginUserSuccess,
  setUserContent,
  checkAuthUser,
  setInit,
  logoutUser,
  registerUser,
  updateStatus,
  firebaseUpdateStatus,
  firebaseUploadAvatarUser,
  setNewAvatar,
  setProgressUpload,
} = userReducer.actions;
