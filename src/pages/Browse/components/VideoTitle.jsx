import React from "react";
import play from "/play.svg";
import info from "/info.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full h-[50vh] md:w-full md:h-auto md:aspect-video pt-[25vh]  lg:pt-[30vh] xl:pt-[35vh] px-6 md:px-12 text-white bg-gradient-to-r from-black/80">
      <h1 className="w-full text-3xl md:w-1/2 sm:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-full lg:w-2/3 xl:w-1/3 text-lg">{overview}</p>
      <div className="mt-4 md:mt-0 flex gap-2">
        <button  className="px-2 pr-6 text-lg sm:px-4 sm:py-2 sm:pr-8 sm:text-xl font-medium text-black bg-white rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-white/50">
          <img className="" src={play} alt="" />
          Play
        </button>
        <button className="px-2  text-lg sm:px-4 sm:py-2 sm:text-xl bg-gray-500/50 rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-gray-500">
          <img src={info} alt="" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
