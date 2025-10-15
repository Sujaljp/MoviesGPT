import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, onCardClick }) => {
  return (
    <div className="z-50  text-white">
      <h1 className="text-2xl sm:text-3xl font-medium py-2 md:py-4">{title}</h1>

      <div className="overflow-x-auto scrollbar-hide ">
        <div className="flex gap-4 w-max">
          {movies &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} onCardClick={onCardClick} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
