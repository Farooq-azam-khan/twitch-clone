import React from "react";

import { X, CogOutline } from "heroicons-react";

const NotificationDropdown = ({ close }) => {
  return (
    <div className="absolute z-30 flex flex-col top-0 shadow-xl right-0 mt-10 bg-gray-800 w-64 overflow-auto">
      <header className="shadow-lg px-2 py-3 inline-flex items-center justify-between">
        <span className="flex-grow">
          <h2 className="text-lg text-center">Notifications</h2>
        </span>
        <span className="inline-flex items-center">
          <a href="#" className="hover:bg-gray-600 p-1 rounded-lg">
            <CogOutline className="h-6 w-6" />
          </a>
          <button className="hover:bg-gray-600 p-1 rounded-lg" onClick={close}>
            <X className="h-6 w-6" />
          </button>
        </span>
      </header>
      <div className="flex flex-col px-4 py-6 justify-center items-center">
        <div className="">
          <BlackWhiteTwitchLogo />
        </div>
        <div>
          <p className="text-gray-400">Hooray! You're in the clear!</p>
        </div>
      </div>
    </div>
  );
};

const BlackWhiteTwitchLogo = () => {
  return (
    <svg
      width="100px"
      height="100px"
      version="1.1"
      viewBox="0 0 24 28"
      x="0px"
      y="0px"
    >
      <g fillRule="evenodd">
        <path d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0L0 5v18h6v5l5-5h4l9-9V0H5zm17 13l-4 4h-4l-4 4v-4H6V2h16v11z" />
        <path
          d="M18 17l4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
};
export default NotificationDropdown;
