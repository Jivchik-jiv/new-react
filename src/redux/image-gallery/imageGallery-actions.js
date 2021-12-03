import { createAction } from "@reduxjs/toolkit";

export const fetchImagesRequest = createAction("image-gallery/getRequest");
export const fetchImagesSuccess = createAction("image-gallery/getSuccess");
export const fetchImagesError = createAction("image-gallery/getError");
