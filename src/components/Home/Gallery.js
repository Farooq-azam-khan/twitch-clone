import React from "react";

import { ChevronLeft, ChevronRight } from "heroicons-react";

const Gallery = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <button className="hover:bg-gray-600 rounded-lg p-1 mr-1">
          <ChevronLeft className="h-8 w-8" />
        </button>
      </div>
      <div className="bg-gray-700 w-full h-full rounded-md shadow-xl">
        <div />
      </div>
      <div>
        <button className="hover:bg-gray-600 rounded-lg p-1 ml-1">
          {" "}
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};
export default Gallery;
