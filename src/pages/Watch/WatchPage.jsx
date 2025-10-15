import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent";
import arrow_back from "/arrow_back.svg";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import MovieList from "../../components/MovieList";
import useMoviesPlaylist from "../../hooks/useMoviesPlaylist";

const WatchPage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useMoviesPlaylist()

  const { state } = useLocation();
  const navigate = useNavigate();
  const handleCardClick = () => {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!state?.movie ) {
    return <ErrorComponent />;
  }

  const { movie, video } = state;

  return (
    <div className="bg-black">
      <div
        className={
          "absolute cursor-default top-0 left-0 z-20 h-16 text-white flex items-center gap-3 md:gap-6 px-4 md:px-8 bg-gradient-to-b from-black w-full transition-opacity duration-500 sm:hover:opacity-100" +
          (showHeader ? " sm:opacity-100" : " sm:opacity-0")
        }
      >
        <img
          onClick={() => navigate(-1)}
          className="w-6 md:w-8 cursor-pointer"
          src={arrow_back}
          alt=""
        />
        <h2 className="overflow-hidden text-lg md:text-2xl text-nowrap">
          {movie.title}
        </h2>
        <div
          className="ml-auto text-lg md:text-2xl cursor-pointer"
          onClick={() => setShowMoreDetails(true)}
        >
          More
        </div>
      </div>
      <div className="w-screen h-screen">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video?.key}?autoplay=1`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      {showMoreDetails && (
        <div className="absolute z-30 bg-black/70 flex items-center justify-center top-0 w-screen h-screen text-white">
          <div className="absolute p-4 md:p-8 bg-black/70 bottom-0 w-[90%] sm:w-[80%] md:w-[65%] h-[75vh] sm:h-[90vh] rounded-t-xl overflow-y-scroll scrollbar-hide ">
            <button
              onClick={() => setShowMoreDetails(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✖
            </button>
            <div className="flex gap-4 md:gap-8 mt-4">
              <img
                className="w-54 object-cover hidden sm:inline-block"
                src={IMAGE_CDN_URL + movie.poster_path}
                alt="movie_poster"
              />
              <div className="   text-white ">
                <h1 className="text-2xl sm:text-4xl font-bold">
                  {movie.title}
                </h1>
                <p className=" py-6 lg:w-2/3  text-lg">{movie.overview}</p>
              </div>
            </div>
            <div>
              {popularMovies && (
                <MovieList
                  title={"Watch more"}
                  movies={popularMovies}
                  onCardClick={handleCardClick}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
