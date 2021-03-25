import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./MoviesContainer.scss";
import MovieRow from "./MovieRow";

function MovieContainer() {
  const {
    seedData,
    selectedCard,
    requestedCard,
    clearRequestedMovie,
    openModal,
    selectMovie,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (selectedCard.movie == null && requestedCard.movie) {
      selectMovie(requestedCard.targetElement, requestedCard.movie);
      clearRequestedMovie();
      openModal();
    } else if (selectedCard.movie) {
      openModal();
    }
  }, [selectedCard.movie]);

  return (
    <section className="movies-container">
      {seedData.map((movies, index) => (
        <>
          <MovieRow key={`key-${index.toString()}`} movies={movies} />
        </>
      ))}
    </section>
  );
}

export default MovieContainer;
