import React from "react";

import Home from "./Home";
import StreamersBar from "./StreamersBar";

const Main = ({ className }) => {
  return (
    <div className={className}>
      <StreamersBar className="h-full overflow-auto w-1/12 md:w-1/5 bg-blue-900 pt-1 " />
      <Home className="flex-grow w-11/12 md:w-3/5 flex flex-col items-center" />
    </div>
  );
};

export default Main;
