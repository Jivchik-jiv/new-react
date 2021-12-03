import { createAction } from "@reduxjs/toolkit";

export const fetchNasaTopImagesRequest = createAction(
  "nasaTopImages/getRequest"
);
export const fetchNasaTopImagesSuccess = createAction(
  "nasaTopImages/getSuccess"
);
export const fetchNasaTopImagesError = createAction("nasaTopImages/getError");

export const fetchNasaSearchedImagesRequest = createAction(
  "nasaSearchedImages/getRequest"
);
export const fetchNasaSearchedImagesSuccess = createAction(
  "nasaSearchedImages/getSuccess"
);
export const fetchNasaSearchedImagesError = createAction(
  "nasaSearchedImages/getError"
);

export const clearSearchedImages = createAction("nasaSearchedImages/clear");

export const fetchNasaImageRequest = createAction("nasaImage/getRequest");
export const fetchNasaImageSuccess = createAction("nasaImage/getSuccess");
export const fetchNasaImageError = createAction("nasaImage/getError");

export const clearImageView = createAction("nasaImagesView/clear");
