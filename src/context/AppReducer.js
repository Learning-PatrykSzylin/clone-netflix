const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MOVIE_PREVIEW":
      return {
        ...state,
        isModalActionInProgress: true,
      };
    case "CLOSE_MOVIE_PREVIEW":
      return {
        ...state,
        isModalActionInProgress: false,
      };
    case "CLOSE_MOVIE_PREVIEW_FINISHED":
      return {
        ...state,
        selectedCard: {
          movie: null,
          targetElement: null,
        },
      };
    case "UNSELECT_MOVIE":
      return {
        ...state,
        selectedCard: {
          movie: null,
          targetElement: null,
        },
      };
    case "SELECT_MOVIE":
      return {
        ...state,
        selectedCard: {
          movie: action.payload.movie,
          targetElement: action.payload.targetElement,
        },
      };
    case "SELECT_REQUESTED_MOVIE":
      return {
        ...state,
        requestedCard: {
          movie: action.payload.movie,
          targetElement: action.payload.targetElement,
        },
      };
    case "CLEAR_REQUESTED_MOVIE":
      return {
        ...state,
        requestedCard: {
          movie: null,
          targetElement: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
