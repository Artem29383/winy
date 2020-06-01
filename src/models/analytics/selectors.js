import { createSelector } from '@reduxjs/toolkit';

const getLikesAnalyticsData = state => state.analytics.likesAnalyticsData;

export const likesAnalyticsDataSelector = createSelector(
  getLikesAnalyticsData,
  likesAnalyticsData => likesAnalyticsData
);
