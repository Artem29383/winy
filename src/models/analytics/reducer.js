import { createSlice } from '@reduxjs/toolkit';
import { correctPrintLineGraphics } from 'utils/correctPrintLineGraphics';
/* eslint-disable no-param-reassign */

const initialState = {
  totalLikesAnalytics: {},
  likesAnalyticsData: {},
  keysRemove: [],
};

const analyticsReducer = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    resetAnalytics(state) {
      state.totalLikesAnalytics = {};
      state.likesAnalyticsData = {};
    },
    changeTotalLikesAnalytics(state, { payload }) {
      const { id, totalLikes, dataNow } = payload;
      state.totalLikesAnalytics[id] = {
        totalLikes,
        dataNow,
      };
    },
    putLikesAnalyticsData(state, { payload }) {
      const { allData } = payload;
      const { labels, dataGraph, keysRemove } = correctPrintLineGraphics(
        allData
      );
      state.likesAnalyticsData = {
        labels,
        dataGraph,
      };
      state.keysRemove = keysRemove;
    },
    firebaseTotalLikesAnalytics: state => state,
    firebaseGetAllLikesAnalytics: state => state,
    firebaseRemoveExtraKeysAllLikesAnalytics: state => state,
  },
});

export default analyticsReducer.reducer;
export const {
  changeTotalLikesAnalytics,
  firebaseTotalLikesAnalytics,
  firebaseGetAllLikesAnalytics,
  putLikesAnalyticsData,
  resetAnalytics,
  firebaseRemoveExtraKeysAllLikesAnalytics,
} = analyticsReducer.actions;
