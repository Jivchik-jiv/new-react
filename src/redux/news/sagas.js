import { call, put, takeEvery } from "redux-saga/effects";
import { newsApi } from "../../api/api";
import {
  fetchNewsSaga,
  fetchNewsError,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "./news-actions";

export function* fetchNewsWatcher() {
  yield takeEvery(fetchNewsSaga.type, fetchNewsWorker);
}

function* fetchNewsWorker(action) {
  yield put(fetchNewsRequest);
  debugger;
  try {
    const news = yield call(newsApi.fetchNews, action.payload);
    yield put(fetchNewsSuccess({ news, page: action.payload.page }));
  } catch (error) {
    yield put(fetchNewsError(error));
  }
}
