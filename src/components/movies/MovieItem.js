import React from "react";
import "./MovieItem.scss";

function MovieItem({ movie, onItemHover, onItemUnselected }) {
  return (
    <div
      className="slider-item"
      onMouseEnter={(e) => onItemHover(e.target, movie)}
      // onMouseLeave={onItemUnselected}
    >
      <img src={movie.backdrop_path} alt="" />
    </div>
  );
}

export default MovieItem;
