import { createAsyncThunk } from "@reduxjs/toolkit";
import { imagesAPI } from "../../api/api";
import {
  fetchImagesError,
  fetchImagesRequest,
  fetchImagesSuccess,
} from "./imageGallery-actions";
import { fetchImages as fethcSlice } from "./imageGallery-reducers";

export const fetchImages = (params) => (dispatch) => {
  dispatch(fetchImagesRequest());

  let options = params || { query: "ocean", page: 1 };

  imagesAPI
    .fetchImages(options)
    .then((images) => {
      dispatch(fethcSlice({ images, page: options.page }));
      // dispatch(fetchImagesSuccess({images, page: options.page}))
    })
    .catch((error) => {
      dispatch(fetchImagesError(error));
    });
};

export const fetchImagesToolkit = createAsyncThunk(
  "image-gallery/get",
  (params) => {
    let options = params || { query: "ocean", page: 1 };

    return imagesAPI.fetchImages(options).then((images) => {
      debugger;
      return { images, page: options.page };
    });

    // let result = await imagesAPI.fetchImages(options);

    //     debugger;
    // return result;
  }
);
