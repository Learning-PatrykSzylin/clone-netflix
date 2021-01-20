import React from "react";
import "./MovieItem.scss";

function MovieItem({ movie, onItemHover, onItemUnselected }) {
  return (
    <div
      className="slider-item"
      onMouseEnter={(e) => onItemHover(e, movie)}
      // onMouseLeave={onItemUnselected}
    >
      <img src="/lupin-avatar.jpg" alt="" />
    </div>
  );
}

export default MovieItem;
