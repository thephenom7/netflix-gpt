import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
        />
        <button className="col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;