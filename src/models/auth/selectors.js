import { createSelector } from '@reduxjs/toolkit';

const getInitialUserData = state => state.auth;

export const initialUserDataSelector = createSelector(
  getInitialUserData,
  auth => auth
);

const getIsInit = state => state.auth.isInit;

export const isInitSelector = createSelector(getIsInit, isInit => isInit);

const getIsAuth = state => state.auth.isAuth;

export const isAuthSelector = createSelector(getIsAuth, isAuth => isAuth);
