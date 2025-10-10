import React from "react";
import play from "/play.svg";
import info from "/info.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-80 px-12 text-white bg-gradient-to-r from-black/80">
      <h1 className="w-1/2 text-5xl font-bold">{title}</h1>
      <p className="py-6 w-1/2 text-lg">{overview}</p>
      <div className="flex gap-2">
        <button className="px-4 py-2 pr-8 text-xl font-medium text-black bg-white rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-white/50">
          <img className="" src={play} alt="" />
          Play
        </button>
        <button className="px-4 py-2 text-xl bg-gray-500/50 rounded-lg  flex gap-1 items-center cursor-pointer hover:bg-gray-500">
          <img src={info} alt="" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
