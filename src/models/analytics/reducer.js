import { createSlice } from '@reduxjs/toolkit';
import { createDataNow } from 'utils/createDataNow';
/* eslint-disable no-param-reassign */

const initialState = {
  totalLikesAnalytics: {},
  likesAnalyticsData: {},
};

const analyticsReducer = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    changeTotalLikesAnalytics(state, { payload }) {
      const { id, totalLikes, dataNow } = payload;
      state.totalLikesAnalytics[id] = {
        totalLikes,
        dataNow,
      };
    },
    putLikesAnalyticsData(state, { payload }) {
      const { labels, dataGraph, dates } = payload;
      if (labels.length < 7) {
        let counts = labels.length;
        while (counts !== 7) {
          dates.push(createDataNow(counts));
          counts += 1;
        }
      }
      state.likesAnalyticsData = {
        labels: dates,
        dataGraph,
      };
    },
    firebaseTotalLikesAnalytics: state => state,
    firebaseGetAllLikesAnalytics: state => state,
  },
});

export default analyticsReducer.reducer;
export const {
  changeTotalLikesAnalytics,
  firebaseTotalLikesAnalytics,
  firebaseGetAllLikesAnalytics,
  putLikesAnalyticsData,
} = analyticsReducer.actions;
