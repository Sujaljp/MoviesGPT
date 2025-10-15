import { useSelector } from "react-redux"
import MovieList from "../../../components/MovieList"
import { useState } from "react";
import MovieModal from "../../../components/MovieModal";

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };
  const closeModal = () => setSelectedMovie(null);

  if(!movies.upcomingMovies) return

  return (
    <div className="px-6 md:px-12 mt-0 lg:-mt-[17vh] xl:-mt-[27vh] z-20 relative ">
      <MovieList  title={"Top rated"} movies={movies.topRatedMovies} onCardClick={handleCardClick} />
      <MovieList  title={"Now playing"} movies={movies.nowPlayingMovies} onCardClick={handleCardClick}/>
      <MovieList  title={"Popular"} movies={movies.popularMovies} onCardClick={handleCardClick}/>
      <MovieList  title={"Upcoming"} movies={movies.upcomingMovies} onCardClick={handleCardClick}/>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  )
}

export default SecondaryContainer