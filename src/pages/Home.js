import React from "react";
import Banner from "../components/banner/Banner";
import PreviewModal from "../components/common/PreviewModal";
import MoviesContainer from "../components/movies/MoviesContainer";

function Home() {
  return (
    <section>
      <Banner />
      <PreviewModal />
      <MoviesContainer />
    </section>
  );
}

export default Home;
