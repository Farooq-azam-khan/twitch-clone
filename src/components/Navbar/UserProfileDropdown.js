import React from "react";
import {
  MoonOutline,
  GlobeAltOutline,
  ChevronRightOutline,
  CogOutline,
  LogoutOutline
} from "heroicons-react";

import { OfflineIcon, ProfileImage } from "../../assets";

const UserProfileDropdown = ({ username = "my_username_is_this" }) => {
  return (
    <div className="absolute flex flex-col bg-gray-800 right-0 mt-2 text-sm text-white pt-2 px-3 rounded-lg overflow-auto">
      {/* top-0 mt-2  text-white text-sm leading-none bg-purple-800 shadow-xl -mx-40 my-2 p-2 rounded-md"> */}
      <header className="border-b py-2 border-gray-500">
        <div className="flex flex-cols">
          <div className="inline-flex items-center mb-2">
            <div className="mr-2">
              <ProfileImage className="w-10 h-10 rounded-full" />
            </div>
            <div>
              {username}
              <br />
              <span className="text-gray-400 inline-flex items-center">
                <OfflineIcon className="w-2 h-2" />
                <span className="ml-1">Offline</span>
              </span>
            </div>
          </div>
        </div>
        <div className="inline-flex">Online</div>
      </header>
      <section className="mt-2 border-b py-1 border-gray-500">
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <button>Channel</button>
        </div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <button>Video Producer</button>
        </div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <button>Creator Dashboard</button>
        </div>
      </section>
      <section className="mt-2 border-b py-2 border-gray-500">
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">Friends</div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <button>Subscriptions</button>
        </div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">Inventory</div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">Wallet</div>
      </section>
      <section className="mt-2 border-b py-2 border-gray-500">
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <div className="inline-flex items-center">
            <span className="mr-1">
              <CogOutline className="h-4 w-4" />
            </span>
            <span>Setting</span>
          </div>
        </div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <div className="inline-flex items-center justify-between">
            <span className="inline-flex items-center">
              <span className="mr-1">
                <GlobeAltOutline className="w-4 h-4" />
              </span>
              <span>Language</span>
            </span>
            <span>
              <ChevronRightOutline className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <div className="inline-flex items-center">
            <span className="mr-1">
              <MoonOutline className="w-4 h-4" />
            </span>
            <span>Dark Theme</span>
          </div>
        </div>
      </section>
      <section className="mt-2 hover:bg-gray-700 rounded-lg px-2 py-2">
        <div className="inline-flex items-center">
          <span class="mr-1">
            <LogoutOutline className="w-4 h-4" />
          </span>
          <span>
            <button>Logout</button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default UserProfileDropdown;
