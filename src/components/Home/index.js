import React from "react";

import PopularCategories from "./PopularCategories";
import PopularLiveChannels from "./PopularLiveChannels";

import Gallery from "./Gallery";
const Home = ({ className }) => {
  return (
    <div className={className}>
      <Gallery className="flex-grow flex flex h-64 w-full items-center justify-between bg-gray-900 px-4 mt-4" />
      <PopularLiveChannels className="flex flex-col mt-4 px-8 border-b border-gray-700" />
      <PopularCategories className="flex flex-col mt-4 mb-10 px-8 border-b border-gray-700" />
    </div>
  );
};

export default Home;
