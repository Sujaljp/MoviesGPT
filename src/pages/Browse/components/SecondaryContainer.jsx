import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)

  return (
    <div className="-mt-52 z-20 relative ">
      <MovieList  title={"Top rated"} movies={movies.topRatedMovies}/>
      <MovieList  title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Popular"} movies={movies.popularMovies}/>
      <MovieList  title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer