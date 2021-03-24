import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import seedData from "../utils/seed";

const initialState = {
  seedData,
  selectedMovie: null,
  targetElement: null,
  // Action -> opening, closing
  isModalActionInProgress: false,
  requestedMovie: null, // This is gets populated when user hovers on a movie
  requestedTargetElement: null,
};

export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function openModal() {
    dispatch({
      type: "OPEN_MOVIE_PREVIEW",
    });
  }

  function closeModal() {
    dispatch({
      type: "CLOSE_MOVIE_PREVIEW",
    });
  }

  function closeModalFinished() {
    dispatch({
      type: "CLOSE_MOVIE_PREVIEW_FINISHED",
    });
  }

  function unselectMovie() {
    dispatch({
      type: "UNSELECT_MOVIE",
    });
  }

  function selectMovie(targetElement, movie) {
    if (state.selectedMovie) {
      if (state.selectedMovie.id !== movie.id) {
        dispatch({
          type: "SELECT_REQUESTED_MOVIE",
          payload: { movie, targetElement },
        });
      }
    } else {
      dispatch({
        type: "SELECT_MOVIE",
        payload: { movie, targetElement },
      });
    }
  }

  function clearRequestedMovie() {
    dispatch({ type: "CLEAR_REQUESTED_MOVIE" });
  }

  return (
    <GlobalContext.Provider
      value={{
        seedData: state.seedData,
        selectedMovie: state.selectedMovie,
        targetElement: state.targetElement,
        isModalActionInProgress: state.isModalActionInProgress,
        requestedMovie: state.requestedMovie,
        requestedTargetElement: state.requestedTargetElement,
        openModal,
        closeModal,
        closeModalFinished,
        unselectMovie,
        selectMovie,
        clearRequestedMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
