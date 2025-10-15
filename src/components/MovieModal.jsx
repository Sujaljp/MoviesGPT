import React, { useEffect, useState } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import play from "/play.svg";
import info from "/info.svg";
import { useNavigate } from "react-router-dom";

const MovieModal = ({ movie, onClose }) => {
  const [video, setVideo] = useState(null);
  const navigate = useNavigate()

  const getMovieVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movie.id +
      "/videos?language=en-US";
    const data = await fetch(url, TMDB_OPTIONS);
    const result = await data.json();
    const filterData = result.results.filter((video) => {
      return video.type === "Trailer";
    });
    const trailer = filterData.length == 0 ? result.results[0] : filterData[0];
    setVideo(trailer);
  };

  const playMovie =() =>{
    navigate("/watch", { state: { movie, video } });
  }


  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 ">
      <div className="absolute  bg-black/90 bottom-0 w-[90%] sm:w-[80%] md:w-[65%] h-[75vh] sm:h-[90vh] rounded-t-xl overflow-y-scroll scrollbar-hide ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl"
        >
          ✖
        </button>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1`}
            title={movie.title}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className=" p-4 pl-8  w-full text-white ">
          <h1 className="w-full text-2xl md:w-1/2 sm:text-4xl font-bold">{movie.title}</h1>
          <p className=" py-6 w-full lg:w-2/3  text-lg">{movie.overview}</p>
          <div className="my-4 md:mt-0 flex gap-2">
            <button onClick={()=> playMovie()} className="px-2 pr-6 text-lg sm:px-4 sm:py-2 sm:pr-8 sm:text-xl font-medium text-black bg-white rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-white/50">
              <img className="" src={play} alt="" />
              Play
            </button>
            <button className="px-2  text-lg sm:px-4 sm:py-2 sm:text-xl bg-gray-500/50 rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-gray-500">
              <img src={info} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
