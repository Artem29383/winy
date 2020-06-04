import { createSelector } from '@reduxjs/toolkit';

const getUser = state => state.user;

export const userSelector = createSelector(getUser, user => user);

const getTotalLikes = state => state.user.totalLikes;

export const totalLikesSelector = createSelector(
  getTotalLikes,
  totalLikes => totalLikes
);

const getUsers = state => state.user.users;

export const usersSelector = createSelector(getUsers, users => users);
