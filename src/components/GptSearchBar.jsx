import React from "react";
import {
  API_OPTIONS,
  DUMMY_GPT_RESULTS,
  TMDB_MOVIE_SEARCH,
  gptQuery,
} from "../utils/constant/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../store/gptSlice";
import openai from "../utils/constant/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  //search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(TMDB_MOVIE_SEARCH(movieName), API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async (e) => {
    e.preventDefault();
    //when you are using openAI
    // const searchText = e.target.gptsearch.value;
    //make an api call to openai/gpt and get movie results
    try {
      //use dummy results to reduce costly api calls
      const gptResults = DUMMY_GPT_RESULTS;

      //only use openAI during final testing

      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery + searchText }],
      //   model: "gpt-3.5-turbo",
      // }); //only use when needed, it costs a lot!!!

      // const recommendedMovies =
      //   gptResults?.choices?.[0]?.message?.content?.split(",");

      //use dummy results while development

      const recommendedMovies = gptResults?.split(",");

      //for each movie search tmdb api to get details for the movie --> async operation => array of promises [promise1, promise2, promise3, promise4, pomise5] --> takes some time to resolve

      const movieDataPromises = recommendedMovies?.map((movie) =>
        searchMovieTMDB(movie)
      );

      //resolve the promises
      const tmdbResults = await Promise.all(movieDataPromises); //gives results only when all promises are resolved, program haults till then

      dispatch(
        addGptMovieResult({
          movieNames: recommendedMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("openai error", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12" onSubmit={handleGptSearch}>
        <input
          type="text"
          name="gptsearch"
          className="p-4 m-4 col-span-9 rounded-lg bg-gray-600"
          placeholder="What would you like to watch today?"
        />
        <button className="py-1 px-2 bg-sky-500 rounded-lg col-span-3 m-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
