import React from "react";

import { Search } from "heroicons-react";
const MobileSearchDropdown = () => {
  return (
    <div className="absolute z-10 flex flex-col top-0 shadow-xl right-0 mt-10 bg-gray-800 w-64 overflow-auto">
      <div className="inline-flex items-center px-2 ">
        <input
          className="rounded-lg active:bg-purple-700 text-gray-900"
          type="text"
          placeholder="Search"
        />
        <a
          href="#"
          className="bg-gray-700 hover:bg-gray-600 p-1 rounded-lg ml-2"
        >
          <Search className="w-4 h-4" />
        </a>
      </div>
      <div>
        <ul>
          <li>CodingGarden</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSearchDropdown;
