import { createAction } from "@reduxjs/toolkit";

export const fetchNewsRequest = createAction("news/getRequest");
export const fetchNewsSuccess = createAction("news/getSuccess");
export const fetchNewsError = createAction("news/getError");

export const fetchNewsSaga = createAction("news/get");
