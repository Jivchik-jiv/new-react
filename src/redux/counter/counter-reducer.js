import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { decrement, increment } from "./counter-actions";

const valueReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const stepReducer = createReducer(3, {});

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
