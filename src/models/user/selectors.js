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

const getIsInit = state => state.user.isInit;

export const isInitSelector = createSelector(getIsInit, isInit => isInit);

const getIsAuth = state => state.user.isAuth;

export const isAuthSelector = createSelector(getIsAuth, isAuth => isAuth);

const getUser = state => state.user.user;

export const userSelector = createSelector(getUser, user => user);
