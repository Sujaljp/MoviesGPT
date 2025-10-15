import React, { useRef, useState } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../../utils/constants";
import { addGptMovies } from "../../utils/store/moviesSlice";
import gemini from "../../utils/gemini";

const GptSearchBar = () => {
  const searchText = useRef();
  const langKey = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const [isFetching,setIsFetching] = useState(false)

  const searchMovie = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, TMDB_OPTIONS);
    const json = await data.json();
    // return { name: movie, list: json.results.slice(0, 4) };
    return { name: movie, list: json.results };
  };

  const handleSearch = async () => {
    if (!searchText.current.value || isFetching) return;

    // const response = await client.responses.create({
    //   model: "gpt-3.5-turbo",
    //   input: `Recommend 5 movies for "${searchText.current.value}". Reply with only the 5 movie names, comma-separated.`
    // });
    // as I did not have much credits with openai so I had to hardcode the result below
    setIsFetching(true)
    const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Recommend 5 movies for "${searchText.current.value}". Reply with only the 5 movie names, comma-separated.`,
      });

    const result = response.text
    const moviesName = result.split(",").map((movie) => movie.trim());

    const data = moviesName.map((movie) => searchMovie(movie));
    const moviesData = await Promise.all(data);
    //sending multiple payloads
    dispatch(addGptMovies({ moviesName, moviesData }));
    setIsFetching(false)
  };
  return (
    <div className="pt-[20vh]  md:pt-[20vh] p-4  md:p-8">
      <form
        className=" bg-black/85 p-2 md:p-4 w-full sm:w-2/3  rounded-lg grid grid-cols-12 gap-2 md:gap-4  sm:mx-auto font-medium"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 col-span-9 rounded-lg bg-white outline-0"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearch}
          className="p-2 md:p-4  col-span-3 text-white bg-red-700 rounded-lg"
        >
          {isFetching? lang[langKey].thinking : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
