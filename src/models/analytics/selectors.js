import { createSelector } from '@reduxjs/toolkit';

const getLikesAnalyticsData = state => state.analytics;

export const likesAnalyticsDataSelector = createSelector(
  getLikesAnalyticsData,
  analytics => analytics
);
