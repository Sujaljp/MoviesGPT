import React from "react";
import Header from "../../components/Header";
import { BANNER } from "../../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src={BANNER} alt="logo" />
      </div>

      <Header />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
