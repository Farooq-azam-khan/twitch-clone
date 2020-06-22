import React, { useState } from "react";

import { X, Cog } from "heroicons-react";

const WhispersDropdown = ({ toggleClose }) => {
  const [toggleSettingDropdown, setSettingDropdown] = useState(false);

  const handleSetting = () => {
    setSettingDropdown(!toggleSettingDropdown);
  };
  return (
    <div className="absolute z-10 flex flex-col right-0 bg-gray-800 border-black w-64 h-64 rounded-lg shadow-xl">
      <header className="inline-flex items-center justify-between shadow-xl p-2 border-b border-gray-900">
        <h2 className="text-center flex-grow">Wispers</h2>
        <span className="inline-flex items-center justify-between">
          <span className="relative mr-1 hover:bg-gray-700 rounded-lg">
            <button className="p-1" onClick={handleSetting}>
              <Cog className="w-5 h-5" />
            </button>
            {toggleSettingDropdown ? <SettingDropdown /> : null}
          </span>
          <span className="hover:bg-gray-700 rounded-lg">
            <button className="p-1" onClick={toggleClose}>
              <X className="w-5 h-5" />
            </button>
          </span>
        </span>
      </header>
      <section className="p-2 bg-gray-800 flex border-b border-gray-900 shadow-sm">
        <input
          className="flex-grow text-gray-100 text-sm leading-none px-3 py-1 rounded-lg bg-gray-700 h-7"
          placeholder="search for people"
        />
      </section>
      <section className="p-2 overflow-auto text-sm">
        <div>idk</div>
      </section>
    </div>
  );
};

const SettingDropdown = () => {
  return (
    <div className="absolute z-20 flex flex-col right-0 w-64 bg-gray-900 rounded-lg p-2 shadow-xl">
      <a href="#" className="block hover:bg-gray-700 rounded-lg py-1 px-2">
        Enable Do Not Disturb
      </a>
      <a href="#" className="block hover:bg-gray-700 rounded-lg py-1 px-2">
        Mark All Wispers as Read
      </a>
    </div>
  );
};
export default WhispersDropdown;
