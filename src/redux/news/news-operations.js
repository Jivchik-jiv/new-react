import { newsApi } from "../../api/api";
import {
  fetchNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "./news-actions";

export const fetchNews = (options) => (dispatch) => {
  debugger;
  dispatch(fetchNewsRequest());
  newsApi
    .fetchNews(options)
    .then((news) => {
      dispatch(fetchNewsSuccess({ news, page: options.page }));
    })
    .catch((error) => {
      dispatch(fetchNewsError(error));
    });
};
