import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  clearImageView,
  clearSearchedImages,
  fetchNasaImageSuccess,
  fetchNasaSearchedImagesSuccess,
  fetchNasaTopImagesSuccess,
} from "./nasa-actions";

const nasaTopImagesReducer = createReducer([], {
  [fetchNasaTopImagesSuccess]: (_, action) => [...action.payload],
});

const nasaSeacrhedImagesReducer = createReducer([], {
  [fetchNasaSearchedImagesSuccess]: (_, action) => [...action.payload],
  [clearSearchedImages]: () => [],
});

const nasaImageViewReducer = createReducer(
  {},
  {
    [fetchNasaImageSuccess]: (_, action) => action.payload,
    [clearImageView]: () => ({}),
  }
);

export const nasaReducer = combineReducers({
  topImages: nasaTopImagesReducer,
  searchedImages: nasaSeacrhedImagesReducer,
  imageView: nasaImageViewReducer,
});
