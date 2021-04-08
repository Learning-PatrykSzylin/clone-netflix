import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieItem from "./MovieItem";
import "./MovieRow.scss";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
];

function MovieRow({ movies }) {
  const { selectMovie, unselectMovie } = useContext(GlobalContext);

  return (
    <section className="sliderContent lolomoRow">
      <h1 className="rowHeader">Trending Now</h1>
      <div className="rowContainer">
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[0, 0]}
          showArrows={false}
        >
          {movies.map((movie) => (
            <MovieItem
              key={`${movie.id}`}
              movie={movie}
              onItemHover={selectMovie}
              onItemUnselected={unselectMovie}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default MovieRow;
