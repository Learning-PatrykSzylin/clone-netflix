import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieItem from "./MovieItem";
import "./MovieRow.scss";

function MovieRow({ movies }) {
  const { openModal, closeModal } = useContext(GlobalContext);

  return (
    <section className="sliderContent">
      {movies.map((movie) => (
        <MovieItem
          key={`${movie.id.toString()}`}
          movie={movie}
          onItemHover={openModal}
          onItemUnselected={closeModal}
        />
      ))}
    </section>
  );
}

export default MovieRow;
