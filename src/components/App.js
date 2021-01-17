import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { loadMovies } from "../redux/actions/movieActions";

function App({ movies, loadMovies }) {
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <h1>Movie:</h1>
      <h2>{movies.length > 0 && movies[0].title}</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
