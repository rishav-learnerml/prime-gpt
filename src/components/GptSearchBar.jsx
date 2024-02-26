import React from "react";
import openai from "../utils/constant/openai";
import { DUMMY_GPT_RESULTS, gptQuery } from "../utils/constant/constants";

const GptSearchBar = () => {
  const handleGptSearch = async (e) => {
    e.preventDefault();
    const searchText = e.target.gptsearch.value;
    //make an api call to openai/gpt and get movie results
    try {
      const gptResults = DUMMY_GPT_RESULTS;
      // await openai.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery + searchText }],
      //   model: "gpt-3.5-turbo",
      // }); //only use when needed, it costs a lot!!!

      const recommendedMovies =
        gptResults?.choices?.[0]?.message?.content?.split(",");

      //for each movie search tmdb api to get details for the movie
    } catch (error) {
      console.log("openai error", error);
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
