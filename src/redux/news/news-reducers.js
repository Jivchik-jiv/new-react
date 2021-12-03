import { createReducer } from "@reduxjs/toolkit";
import { fetchNewsSuccess } from "./news-actions";

export const newsReducer = createReducer([], {
  [fetchNewsSuccess]: (state, action) => {
    if (action.payload.page === 1) {
      return [...action.payload.news];
    }
    return [...state, ...action.payload.news];
  },
});
