import React from "react";

// import PopularCategories from "./PopularCategories";
import PopularLiveChannels from "./PopularLiveChannels";

import Gallery from "./Gallery";
const Home = ({ className }) => {
  return (
    <div className={className}>
      <Gallery className="flex-grow flex flex h-64 w-full items-center justify-between bg-gray-900 px-4 m-2" />
      <PopularLiveChannels clasName="flex bg-orange-800 flex-col items-center justify-between" />
      {/* <PopularCategories /> */}
    </div>
  );
};

export default Home;
