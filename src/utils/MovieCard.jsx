import React, { useState } from "react";
import { TMDB_MOVIE_POSTER } from "./constant/constants";
import movie_bg from "../assets/Prime_Video_logo.avif";
import { Check, Info, Play, Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const MovieCard = ({
  posterPath,
  title,
  logo,
  description,
  isAdult,
  releaseDate,
  setShowInfo,
  showInfo,
  index,
}) => {
  return (
    <div
      onMouseOver={() => setShowInfo(index)}
      onMouseLeave={() => setShowInfo(-1)}
      className={`transition-transform shadow-lg transform relative hover:scale-125 hover:zoom-in-150 ${
        showInfo === index && "z-40"
      }`}
    >
      <div className="w-60 cursor-pointer relative">
        <img
          src={posterPath ? TMDB_MOVIE_POSTER + posterPath : movie_bg}
          alt="movie-card"
          className={`rounded-lg ${
            !index === showInfo ? "rounded-t-lg" : "rounded-b-none"
          }`}
        />
        <div className="text-gray-200 text-center text-lg font-mono absolute bottom-3 right-2">
          {logo ? (
            <img src={TMDB_MOVIE_POSTER + logo} alt={title} className="w-28" />
          ) : (
            <span>{title}</span>
          )}
        </div>
      </div>
      <div className={`absolute z-50`}>
        {index === showInfo && (
          <div className="px-5 py-5 shadow-lg bg-black w-60">
            <div className="text-white">
              <span className="flex text-sm">
                <Check
                  size={18}
                  strokeWidth={5}
                  color="#000000"
                  className="bg-sky-500 rounded-full p-1 me-2 mt-[1%]"
                />
                Included with Prime
              </span>
            </div>
            <div className="flex mt-4">
              <div className="bg-white rounded-full w-fit p-4 hover:scale-105 hover:opacity-90 cursor-pointer">
                <Play
                  size={24}
                  color="#000000"
                  strokeWidth={3}
                  fill="#000000"
                  className="color-black ps-1"
                />
              </div>

              <div className="ps-5 text-sm flex items-center text-white">
                Play Trailer
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="bg-neutral-700 rounded-full p-2 w-fit h-fit ms-2 cursor-pointer">
                      <Plus size={20} color="#ffffff" strokeWidth={3} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-lg">Watchlist </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="bg-neutral-700 rounded-full p-2 w-fit h-fit ms-2 cursor-pointer">
                      <Info size={20} color="#ffffff" strokeWidth={2} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-lg">Details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-white text-lg my-2 font-semibold">{title}</div>
            <div className="text-white text-md my-2 font-semibold mb-1">
              <span className="text-gray-600 pe-4">{releaseDate}</span>
              <span className="bg-gray-700 p-1 text-white text-sm rounded-md">
                {isAdult ? "A" : "U/A"}
              </span>
            </div>
            <div className="text-sm my-2 font-semibold text-gray-600">
              {description
                ? description.slice(0, 50)
                : "No description available"}
              ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
