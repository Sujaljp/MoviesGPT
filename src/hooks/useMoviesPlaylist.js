import { useDispatch, useSelector } from "react-redux";
import {
  TMDB_NOW_PLAYING_URL,
  TMDB_OPTIONS,
  TMDB_POPULAR_URL,
  TMDB_TOP_RATED_URL,
  TMDB_UPCOMING_URL,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMoves,
} from "../utils/store/moviesSlice";
import { useEffect } from "react";

const useMoviesPlaylist = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  const getTopRatedList = async () => {
    console.log("getTopRatedList")
    const data = await fetch(TMDB_TOP_RATED_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  const getNowPlayingList = async () => {
    console.log("getNowPlayingList")
    const data = await fetch(TMDB_NOW_PLAYING_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getPopularList = async () => {
    console.log("getPopularList")
    const data = await fetch(TMDB_POPULAR_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  const getUpcomingList = async () => {
    console.log("getUpcomingList")
    const data = await fetch(TMDB_UPCOMING_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMoves(json.results));
  };

  useEffect(() => {
    //different way of writing
    !movies.topRatedMovies && getTopRatedList()

    if (!movies.nowPlayingMovies) {
      getNowPlayingList();
    }
    if (!movies.popularMovies) {
      getPopularList();
    }
    if (!movies.upcomingMovies) {
      getUpcomingList();
    }
  }, []);
};

export default useMoviesPlaylist;
