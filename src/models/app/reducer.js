import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */

const initialState = {
  isLoading: false,
  progressUpload: 0,
  error: {
    message: '',
    idError: '',
  },
  successMsg: '',
  theme: 'light',
};

const appReducer = createSlice({
  name: 'app',
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
    setSuccess(state, { payload }) {
      state.successMsg = payload;
    },
    setProgressUpload(state, { payload }) {
      state.progressUpload = payload;
    },
    resetAll(state) {
      Object.assign(state, initialState);
    },
    themeChangeHandle(state, { payload }) {
      state.theme = payload;
    },
  },
});

export default appReducer.reducer;
export const {
  setError,
  setLoader,
  setProgressUpload,
  resetAll,
  setSuccess,
  themeChangeHandle,
} = appReducer.actions;
