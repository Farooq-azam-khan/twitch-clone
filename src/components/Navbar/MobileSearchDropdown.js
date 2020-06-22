import React, { useState } from "react";

import { SearchOutline, X, RefreshOutline } from "heroicons-react";

const sampleSearchHistory = [
  { id: 1, query: "fed" },
  { id: 2, query: "codinggarden" },
  { id: 3, query: "nym" }
];
const MobileSearchDropdown = () => {
  return (
    <div className="absolute z-30 flex flex-col top-0 shadow-xl right-0 mt-10 bg-gray-800 pt-1 rounded-lg w-64 overflow-auto">
      <span className="inline-flex items-center justify-center rounded-lg p-0 overflow-hidden mx-3">
        <SearchInput />
        <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2">
          <SearchOutline className="w-4 h-4" />
        </a>
      </span>
      {/* search list */}
      <SearchList initialSearches={sampleSearchHistory} />
    </div>
  );
};

const SearchList = ({ initialSearches }) => {
  const [searches, setSearches] = useState(initialSearches);
  // https://css-tricks.com/slightly-careful-sub-elements-clickable-things/
  const handleRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    const filterOut = +e.target.id;
    setSearches(searches.filter(sh => filterOut !== sh.id));
  };
  return (
    <div>
      <div className="my-4 mx-2 flex flex-col">
        {searches.map(sh => (
          <SearchItem key={sh.id} {...sh} onClick={handleRemove} />
        ))}
      </div>
    </div>
  );
};

const SearchItem = ({ id, query, onClick }) => {
  return (
    <span className="flex justify-between items-center items-center hover:bg-gray-700 px-2 py-1 rounded-lg cursor-pointer">
      <a href="#" className="flex-grow inline-flex items-center">
        <span className="mr-2">
          <RefreshOutline className="w-4 h-4 text-purple-400" />
        </span>
        <span className="text-sm text-purple-400">{query}</span>
      </a>
      <span>
        <button
          id={id}
          className="hover:bg-gray-600 z-10 p-1 rounded-lg"
          onClick={onClick}
        >
          <X className="w-4 h-4" />
        </button>
      </span>
    </span>
  );
};

const SearchInput = () => {
  return (
    <input
      className="active:bg-purple-700 bg-gray-900 h-8 text-white p-2"
      type="text"
      placeholder="Search"
    />
  );
};

export default MobileSearchDropdown;
