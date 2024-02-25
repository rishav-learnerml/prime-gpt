import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
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
