import React from "react";

import Gallery from "./Gallery";
const Home = ({ className }) => {
  return (
    <div className={className}>
      <Gallery className="flex-grow flex items-center justify-center bg-gray-600" />
    </div>
  );
};

export default Home;
