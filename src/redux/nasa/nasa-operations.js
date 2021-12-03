import { nasaApi } from "../../api/nasa-api";
import {
  fetchNasaImageError,
  fetchNasaImageSuccess,
  fetchNasaSearchedImagesError,
  fetchNasaSearchedImagesRequest,
  fetchNasaSearchedImagesSuccess,
  fetchNasaTopImagesError,
  fetchNasaTopImagesRequest,
  fetchNasaTopImagesSuccess,
} from "./nasa-actions";

export const fetchNasaImages = (params) => (dispatch) => {
  if (!params) {
    dispatch(fetchNasaTopImagesRequest());

    let topParams = "start_date=2021-01-01&end_date=2021-01-10";

    nasaApi
      .fetchImages(topParams)
      .then((images) => {
        dispatch(fetchNasaTopImagesSuccess(images));
      })
      .catch((error) => {
        dispatch(fetchNasaTopImagesError(error));
      });
  } else if (params.isSingle) {
    let singleImageParams = `date=${params.date}`;
    nasaApi
      .fetchImages(singleImageParams)
      .then((image) => {
        dispatch(fetchNasaImageSuccess(image));
      })
      .catch((error) => {
        dispatch(fetchNasaImageError(error));
      });
  } else {
    dispatch(fetchNasaSearchedImagesRequest());

    let searchedParams = `start_date=${params.start}&end_date=${params.end}`;

    nasaApi
      .fetchImages(searchedParams)
      .then((images) => {
        dispatch(fetchNasaSearchedImagesSuccess(images));
      })
      .catch((error) => {
        dispatch(fetchNasaSearchedImagesError(error));
      });
  }
};
