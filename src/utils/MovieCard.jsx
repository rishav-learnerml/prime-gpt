import React from "react";
import { TMDB_MOVIE_POSTER } from "./constant/constants";
import movie_bg from "../assets/Prime_Video_logo.avif";

const MovieCard = ({ posterPath, title, logo }) => {
  return (
    <div className="w-60 cursor-pointer relative">
      <img
        src={posterPath ? TMDB_MOVIE_POSTER + posterPath : movie_bg}
        alt="movie-card"
        className="rounded-md"
      />
      <div className="text-gray-200 text-center text-lg font-mono absolute bottom-3 right-2">
        {logo ? (
          <img src={TMDB_MOVIE_POSTER + logo} alt={title} className="w-28" />
        ) : (
          <span>{title}</span>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
