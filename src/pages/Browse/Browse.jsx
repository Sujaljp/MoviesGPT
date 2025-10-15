import React from "react";
import Header from "../../components/Header";
import useMoviesPlaylist from "../../hooks/useMoviesPlaylist";
import MainContainer from "./components/MainContainer";
import SecondaryContainer from "./components/SecondaryContainer";

{
  /* 
            Main Container
                - Video background
                - Video title
            Secondary Container
                - MoviesList * n
                    - movie card * n
         */
}
const Browse = () => {
  useMoviesPlaylist();
  return (
    <div className="scrollbar-hide bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
