import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieItem from "./MovieItem";
import "./MovieRow.scss";

function MovieRow({ movies }) {
  const { selectMovie, unselectMovie } = useContext(GlobalContext);

  return (
    <section className="sliderContent lolomoRow">
      <h1 className="rowHeader">Trending Now</h1>
      <div className="rowContainer">
        {movies.map((movie) => (
          <MovieItem
            key={`${movie.id.toString()}`}
            movie={movie}
            onItemHover={selectMovie}
            onItemUnselected={unselectMovie}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
