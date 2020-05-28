import { createSelector } from '@reduxjs/toolkit';

const getError = state => state.app.error;

export const errorSelector = createSelector(getError, error => error);

const getSuccessMsg = state => state.app.successMsg;

export const successMsgSelector = createSelector(
  getSuccessMsg,
  successMsg => successMsg
);

const getLoading = state => state.app.isLoading;

export const loadingSelector = createSelector(
  getLoading,
  isLoading => isLoading
);

const getProgressUpload = state => state.app.progressUpload;

export const progressUploadSelector = createSelector(
  getProgressUpload,
  progressUpload => progressUpload
);

const getTheme = state => state.app.theme;

export const themeSelector = createSelector(getTheme, theme => theme);
