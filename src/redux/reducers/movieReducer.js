import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return [...state, { ...action.movie }];
    default:
      return state;
  }
}
