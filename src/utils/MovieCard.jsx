import React, { useState } from "react";
import { TMDB_MOVIE_POSTER, YOUTUBE_EMBED_URL } from "./constant/constants";
import movie_bg from "../assets/Prime_Video_logo.avif";
import { Check, Info, Play, Plus, ShoppingBagIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { Link } from "react-router-dom";

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
  movieId,
}) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId, description);

  return (
    <div
      onMouseOver={() => setShowInfo(index)}
      onMouseLeave={() => setShowInfo(-1)}
      className={`transition-transform transform relative hover:scale-125 hover:zoom-in-150 ${
        showInfo === index && "z-40"
      }`}
    >
      <div className="w-30 md:w-60 cursor-pointer relative">
        {showInfo !== index ? (
          <img
            src={posterPath ? TMDB_MOVIE_POSTER + posterPath : movie_bg}
            alt="movie-card"
            className={`rounded-lg ${
              index === showInfo ? "rounded-t-lg rounded-b-none" : "rounded-lg"
            }`}
          />
        ) : (
          <iframe
            className="relative z-50 w-full aspect-auto zoom-in-150 scale-y-150"
            src={
              YOUTUBE_EMBED_URL +
              trailer?.[movieId]?.key +
              `?showinfo=0&autoplay=1&mute=1&controls=0&loop=1&rel=0&autohide=1&start=5`
            }
            title="video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            loading="lazy"
          ></iframe>
        )}
        <div className="text-gray-200 text-center text-sm md:text-lg font-mono absolute bottom-3 right-2">
          {logo ? (
            <img src={TMDB_MOVIE_POSTER + logo} alt={title} className="w-28" />
          ) : (
            <span>{title}</span>
          )}
        </div>
      </div>
      <Link className={`absolute z-50`} to={`/browse/${movieId}`}>
        {index === showInfo && (
          <div className="px-5 py-5 shadow-lg bg-black w-60">
            <div className="text-white">
              {trailer?.[movieId]?.key ? (
                <span className="flex text-xs md:text-lg">
                  <Check
                    strokeWidth={5}
                    color="#000000"
                    className="bg-sky-500 rounded-full p-1 me-2 md:mt-1 w-4 h-4 md:h-5 md:w-5"
                  />
                  Included with Prime
                </span>
              ) : (
                <span className="flex text-lg">
                  <ShoppingBagIcon
                    strokeWidth={2}
                    color="#fbbf24"
                    className="me-2 md:mt-1 w-4 h-4 md:h-5 md:w-5"
                  />
                  Available to rent
                </span>
              )}
            </div>
            <div className="flex mt-4">
              <Link
                to={`/play/${movieId}`}
                className="bg-white rounded-full w-10 p-2 h-10 md:w-fit md:h-full md:p-4 hover:scale-105 hover:opacity-90 cursor-pointer"
              >
                <Play
                  color="#000000"
                  strokeWidth={3}
                  fill="#000000"
                  className="color-black ps-1 w-4 md:w-6"
                />
              </Link>

              <div className="ps-5 text-sm md:text-xs flex items-center text-white">
                Play Trailer
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="bg-neutral-700 rounded-full p-2 w-fit h-fit ms-2 cursor-pointer hidden md:block">
                      <Plus size={20} color="#ffffff" strokeWidth={3} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-md">Watchlist </p>
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
                    <p className="text-md">Details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-white text-sm md:text-lg my-2 font-semibold">
              {title}
            </div>
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
      </Link>
    </div>
  );
};

export default MovieCard;
