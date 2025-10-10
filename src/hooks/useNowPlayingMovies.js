import { useDispatch } from "react-redux";
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

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedList = async () => {
    const data = await fetch(TMDB_TOP_RATED_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  const getNowPlayingList = async () => {
    const data = await fetch(TMDB_NOW_PLAYING_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getPopularList = async () => {
    const data = await fetch(TMDB_POPULAR_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  const getUpcomingList = async () => {
    const data = await fetch(TMDB_UPCOMING_URL, TMDB_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMoves(json.results));
  };

  useEffect(() => {
    getTopRatedList();
    getNowPlayingList();
    getPopularList();
    getUpcomingList();
  }, []);
};

export default useNowPlayingMovies;
