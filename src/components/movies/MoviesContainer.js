import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./MoviesContainer.scss";
import MovieRow from "./MovieRow";

function MovieContainer() {
  const {
    seedData,
    selectedMovie,
    requestedMovie,
    requestedTargetElement,
    clearRequestedMovie,
    openModal,
    selectMovie,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (selectedMovie == null && requestedMovie) {
      selectMovie(requestedTargetElement, requestedMovie);
      clearRequestedMovie();
      openModal();
    } else if (selectedMovie) {
      openModal();
    }
  }, [selectedMovie]);

  return (
    <>
      {seedData.map((movies, index) => (
        <MovieRow key={`key-${index.toString()}`} movies={movies} />
      ))}
    </>
  );
}

export default MovieContainer;
