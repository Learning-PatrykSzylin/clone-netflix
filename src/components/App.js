import React from "react";
import { GlobalProvider } from "../context/GlobalState";
import Banner from "../components/banner/Banner";
import PreviewModal from "./common/PreviewModal";
import MoviesContainer from "./movies/MoviesContainer";

function App() {
  return (
    <GlobalProvider>
      <section>
        <Banner />
        <PreviewModal />
        <MoviesContainer />
      </section>
    </GlobalProvider>
  );
}

export default App;
