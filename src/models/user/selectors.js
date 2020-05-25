import { createSelector } from '@reduxjs/toolkit';

const getUser = state => state.user;

export const userSelector = createSelector(getUser, user => user);

const getUserAbout = state => state.user.about;

export const userAboutSelector = createSelector(getUserAbout, about => about);
