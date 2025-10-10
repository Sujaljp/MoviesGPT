import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMainMovie } from "../utils/store/moviesSlice";

const useMainMovieVideo = (id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
    const data = await fetch(url, TMDB_OPTIONS);
    const result = await data.json();
    const filterData = result.results.filter((video) => {
      return video.type === "Trailer" && video.name == "Official Trailer";
    });
    const trailer = filterData.length == 0 ? result.results[0] : filterData[0];
    dispatch(addMainMovie(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMainMovieVideo;
