import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import gptBanner from "../assets/GPT-banner.png";

const SearchPage = () => {
  return (
    <div
      className="text-white h-screen bg-grad"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)),url(${gptBanner}) no-repeat center center/cover`,
      }}
    >
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default SearchPage;
