import { createSelector } from '@reduxjs/toolkit';

const getError = state => state.user.error;

export const errorSelector = createSelector(getError, error => error);

const getSuccessMsg = state => state.user.successMsg;

export const successMsgSelector = createSelector(
  getSuccessMsg,
  successMsg => successMsg
);

const getLoading = state => state.user.isLoading;

export const loadingSelector = createSelector(
  getLoading,
  isLoading => isLoading
);
