const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MOVIE_PREVIEW":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "CLOSE_MOVIE_PREVIEW":
      return {
        ...state,
        selectedMovie: null,
      };
    default:
      return state;
  }
};

export default reducer;
