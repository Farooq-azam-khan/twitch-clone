import React from "react";

import Home from "./Home";
import StreamersBar from "./StreamersBar";

const Main = ({ className = "" }) => {
  return (
    <div className={className}>
      <StreamersBar className="w-1/12 md:w-1/5 bg-blue-900 pt-1 overflow-auto h-screen" />
      <div className="w-11/12 md:w-3/5 overflow-auto">
        <Home />
      </div>
    </div>
  );
};

export default Main;
