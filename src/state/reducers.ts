import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setStudiesList } from "./actions";
import { AppState } from "./store";
import { Study } from "../utils/types";

const INITIAL_STUDIES_LIST: { studies: Array<Study> } = {
  studies: [],
};

const studiesListReducer = createReducer(INITIAL_STUDIES_LIST, (builder) => {
  builder.addCase(setStudiesList, (state, { payload }) => {
    state.studies = payload;
  });
});

const reducers = combineReducers({
  allStudies: studiesListReducer,
});

export const studiesListSelector = (state: AppState) =>
  state.allStudies.studies;

export default reducers;
