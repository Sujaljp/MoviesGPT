import { useSelector } from "react-redux"
import MovieList from "../../../components/MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)

  if(!movies.upcomingMovies) return

  return (
    <div className="mt-0 lg:-mt-[17vh] xl:-mt-[30vh] z-20 relative ">
      <MovieList  title={"Top rated"} movies={movies.topRatedMovies}/>
      <MovieList  title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList  title={"Popular"} movies={movies.popularMovies}/>
      <MovieList  title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer