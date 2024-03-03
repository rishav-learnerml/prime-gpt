import React from "react";
import MovieDetails from "./MovieDetails";
import MovieBackground from "./MovieBackground";
import RecommendedMovies from "./RecommendedMovies";
import Footer from "../utils/Footer";

const MoviePlayer = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="relative">
        <MovieDetails />
        <MovieBackground />
      </div>
      <RecommendedMovies />
      <div className="mt-64">
        <Footer />
      </div>
    </div>
  );
};

export default MoviePlayer;
