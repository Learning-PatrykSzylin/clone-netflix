import React, { useContext } from "react";
import { GlobalProvider, GlobalContext } from "../context/GlobalState";
import MovieRow from "../components/movies/MovieRow";
import Banner from "../components/banner/Banner";
import PreviewModal from "./common/PreviewModal";

function App() {
  const { seedData } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <section>
        <Banner />
        <PreviewModal />
        {seedData.map((movies, index) => (
          <MovieRow key={`key-${index.toString()}`} movies={movies} />
        ))}
      </section>
    </GlobalProvider>
  );
}

export default App;
