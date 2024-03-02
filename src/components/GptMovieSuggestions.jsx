import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../utils/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-transparent text-white">
      <div className="my-2 text-4xl text-center">Prime-GPT Recommends</div>
      {movieNames.map((movieName, index) => (
        <MovieList
          title={movieName}
          movies={movieResults[index]}
          key={movieName}
          count={movieResults[index].length}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
