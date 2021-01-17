import * as types from "./actionTypes";

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function loadMovies() {
  return function (dispatch, getState, { axios, requests }) {
    return axios
      .get(requests.fetchActionMovies)
      .then((res) => {
        dispatch(loadMoviesSuccess(res.data.results));
        // return Promise.resolve(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  };
}
