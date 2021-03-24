import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieItem from "./MovieItem";
import "./MovieRow.scss";

function MovieRow({ movies }) {
  const { selectMovie, unselectMovie } = useContext(GlobalContext);

  return (
    <section className="sliderContent">
      {movies.map((movie) => (
        <MovieItem
          key={`${movie.id.toString()}`}
          movie={movie}
          onItemHover={selectMovie}
          onItemUnselected={unselectMovie}
        />
      ))}
    </section>
  );
}

export default MovieRow;
