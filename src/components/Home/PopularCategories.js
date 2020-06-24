import React from "react";

import { JustChatting } from "../../assets/index";
import { DotsVertical } from "heroicons-react";

const PopularCategories = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="font-bold text-lg">
        Popular{" "}
        <a className="hover:underline text-purple-500" href="#">
          categories
        </a>
      </h2>
      <div className="flex mt-2">
        <Category
          category="Just Chatting"
          className="flex flex-col justify-between mr-2 mb-10 w-1/2 rounded overflow-hidden"
        >
          <Pill text="IRL" />
        </Category>
        <Category
          category="Counter Strike"
          className="flex flex-col mr-2 mb-10 w-1/2 justify-between overflow-hidden"
        >
          <Pill text="IRL" />
          <Pill text="FPS" />
        </Category>
        <Category
          category="League of Legands"
          className="flex flex-col mr-2 mb-10 w-1/2 justify-between overflow-hidden"
        >
          <Pill text="IRL" />
        </Category>
        <Category
          category="League of Legands"
          className="hidden md:flex flex-col mb-10 w-1/2 justify-between"
        >
          <Pill text="IRL" />
        </Category>
        <Category
          category="League of Legands"
          className="hidden md:flex flex-col mb-10 w-1/2 justify-between"
        >
          <Pill text="IRL" />
        </Category>
      </div>
    </div>
  );
};

const Category = ({ category, className, children }) => {
  return (
    <div className={className}>
      <span className="w-full flex-grow bg-purple-800 border-2 hover:border-purple-600">
        <img
          className="object-fill w-full"
          src={JustChatting}
          alt="Just Chatting"
        />
      </span>
      <span className="inline-flex items-center justify-between mt-2">
        <h3 className="truncate font-semibold text-sm">
          <a className="hover:text-purple-600" href="#">
            {category}
          </a>
        </h3>

        <button className="hover:bg-gray-700 p-1 rounded-lg">
          <DotsVertical className="w-5 h-5" />
        </button>
      </span>

      <span className="mt-1 mb-1 text-sm text-gray-400">
        <a className="hover:text-purple-600" href="#">
          244K viewers
        </a>
      </span>
      <div className="flex">{children}</div>
    </div>
  );
};

const Pill = ({ text }) => {
  return (
    <div className="hover:bg-gray-700 bg-gray-800 rounded-full text-xs leading-none mr-1 px-2 py-1">
      <a className="text-sm" href="#">
        {text}
      </a>
    </div>
  );
};
export default PopularCategories;
