import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import seedData from "../utils/seed";

const initialState = {
  seedData,
  selectedMovie: null,
};

export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function openModal(e, movie) {
    dispatch({
      type: "OPEN_MOVIE_PREVIEW",
      payload: movie,
    });
  }

  function closeModal() {
    dispatch({
      type: "CLOSE_MOVIE_PREVIEW",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        seedData: state.seedData,
        selectedMovie: state.selectedMovie,
        openModal,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
