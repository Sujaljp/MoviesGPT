import { useSelector } from "react-redux";
import useMainMovieVideo from "../../../hooks/useMainMovieVideo";

const VideoBackground = ({ id}) => {

  const mainMovie = useSelector((store) => store.movies.mainMovie);
  const videoId = mainMovie?.key

  useMainMovieVideo(id)
  
  return (
    <div>
      <iframe
        className=" w-full h-[50vh] md:w-full md:h-auto md:aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1&playlist=${videoId}&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        autoPlay
      ></iframe>
    </div>
  );
};

export default VideoBackground;
