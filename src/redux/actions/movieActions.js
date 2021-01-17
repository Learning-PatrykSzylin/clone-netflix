import * as types from "./actionTypes";

export function loadMovies(movie) {
  return { type: types.LOAD_MOVIES_SUCCESS, movie };
}
