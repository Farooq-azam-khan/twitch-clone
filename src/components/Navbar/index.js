import React, { useState } from "react";
import {
  DotsHorizontal,
  Search,
  AnnotationOutline,
  BellOutline,
  DesktopComputerOutline,
  Heart,
  DuplicateOutline,
  Briefcase,
  MoonOutline,
  GlobeAltOutline,
  ChevronRightOutline,
  CogOutline,
  LogoutOutline
} from "heroicons-react";

import MoreDropdown from "./MoreDropdown";
import BitsDropdown from "./BitsDropdown";
import PrimeLootDropdown from "./PrimeLootDropdown";
import NotificationDropdown from "./NotificationDropdown";
import MobileSearchDropdown from "./MobileSearchDropdown";

const Navbar = ({ className }) => {
  const [toggleProfile, setProfile] = useState(false);
  const [toggleMoreDropdown, setMoreDropdown] = useState(false);
  const [toggleBitsDropdown, setBitsDropdown] = useState(false);
  const [togglePrimelootDropdown, setPrimelootDropdown] = useState(false);
  const [toggleNotification, setNotificationDropdown] = useState(false);
  const [toggleSearch, setSearchDropdown] = useState(true);

  const handleSearchDropdown = () => {
    setSearchDropdown(!toggleSearch);
  };

  const handleMoreDropdown = () => {
    setMoreDropdown(!toggleMoreDropdown);
  };

  const handleProfileToggle = () => {
    setProfile(!toggleProfile);
  };

  const handleBitsClick = () => {
    setBitsDropdown(!toggleBitsDropdown);
  };

  const handlePrimeLoot = () => {
    setPrimelootDropdown(!togglePrimelootDropdown);
  };

  const handleNotification = () => {
    setNotificationDropdown(!toggleNotification);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center">
          <span>
            <TwitchLogo className="w-5 h-5" />
          </span>
          <a href="#" className="text-white mr-2 ml-3 hover:text-purple-600">
            <span className="block md:hidden">
              <Heart className="w-5 h-5" />
            </span>
            <span className="hidden md:block">Following</span>
          </a>
          {/* can do borer right */}
          <a href="#" className="text-white mr-3 hover:text-purple-600">
            <span className="block md:hidden">
              <DuplicateOutline className="w-5 h-5 hover:text-purple-600" />
            </span>
            <span className="hidden md:block">Browse</span>
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-white mr-2 ml-3 hover:text-purple-600">
            <span className="block md:hidden">
              <Briefcase className="w-5 h-5 hover:text-purple-600" />
            </span>
            <span className="hidden md:block">Esport</span>
          </a>
          <a href="#" className="text-white mr-2 hover:text-purple-600">
            <span className="block md:hidden">
              <MusicIcon className="w-5 h-5" />
            </span>
            <span className="hidden md:block">Music</span>
          </a>
          <span className="relative text-white">
            <button
              onClick={handleMoreDropdown}
              className="hover:bg-gray-700 rounded-lg p-1"
            >
              <DotsHorizontal className="w-5 h-5 " />
            </button>
            {toggleMoreDropdown ? <MoreDropdown /> : null}
          </span>
        </span>
        <span className="hidden md:block md:inline-flex">
          <span className="hidden sm:block">
            <input type="text" placeholder="search" />
          </span>
          <span>
            <button className="bg-gray-700 text-gray-800 rounded-lg">
              <Search />
            </button>
          </span>
        </span>

        {/* mobile search  */}
        <span className="inline-flex items-center">
          <span className="md:hidden text-white mr-1">
            <button
              onClick={handleSearchDropdown}
              className="hover:bg-gray-700 rounded-lg p-1"
            >
              <Search className="w-5 h-5" />
            </button>
            {toggleSearch ? <MobileSearchDropdown /> : null}
          </span>
          {/* prime loot */}
          <span className="relative text-white mr-1">
            <button
              onClick={handlePrimeLoot}
              className="hover:bg-gray-700 rounded-lg p-1"
            >
              <DesktopComputerOutline className="w-5 h-5" />
            </button>
            {togglePrimelootDropdown ? (
              <PrimeLootDropdown close={handlePrimeLoot} />
            ) : null}
          </span>
          {/* notification */}
          <span className="relative text-white mr-1">
            <button
              onClick={handleNotification}
              className="hover:bg-gray-700 rounded-lg p-1"
            >
              <BellOutline className="w-5 h-5" />
            </button>

            {toggleNotification ? (
              <NotificationDropdown close={handleNotification} />
            ) : null}
          </span>
          <span className="text-white mr-1">
            <button className="hover:bg-gray-700 rounded-lg p-1">
              <AnnotationOutline className="w-5 h-5" />
            </button>
          </span>
          {/* bits button */}
          <span className="relative mr-2">
            <button
              onClick={handleBitsClick}
              className="block text-white hover:bg-gray-700 rounded-lg p-1 md:hidden"
            >
              <BitsIcon className="w-4 h-4" />
            </button>
            <button
              onClick={handleBitsClick}
              className="hidden md:block md:inline-flex md:items-center bg-gray-700 px-2 py-1 text-white hover:bg-gray-600"
            >
              <BitsIcon className="w-4 h-4" />
              <span className="text-sm">Get Bits</span>
            </button>

            {toggleBitsDropdown ? <BitsDropdown /> : null}
          </span>
          <span className="relative bottom-0 right-0">
            <button onClick={handleProfileToggle}>
              <ProfileImage width />
            </button>
            {toggleProfile ? <UserProfileDropdown /> : null}
          </span>
        </span>
      </div>
    </div>
  );
};

const UserProfileDropdown = ({ username = "alucard_is_dracula" }) => {
  return (
    <div className="absolute text-white text-sm leading-none bg-gray-800 rounded-md shadow-xl -mx-40 my-2 p-2">
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
          <div class="inline-flex items-center">
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
const BitsIcon = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="none"
      fill="currentColor"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
      />
    </svg>
  );
};
// const SearchSection = () => {};
const TwitchLogo = () => {
  return (
    <img
      className="h-6 w-6"
      src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
      alt="twitch logo"
    />
  );
};

const OfflineIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="none"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

const MusicIcon = () => {
  return (
    <svg
      stroke="none"
      fill="currentColor"
      width="24px"
      height="24px"
      version="1.1"
      viewBox="0 0 20 20"
      x="0px"
      y="0px"
    >
      <g>
        <path
          fillRule="evenodd"
          d="M18 4.331a2 2 0 00-2.304-1.977l-9 1.385A2 2 0 005 5.716v7.334A2.5 2.5 0 106.95 16H7V9.692l9-1.385v2.743A2.5 2.5 0 1017.95 14H18V4.33zm-2 0L7 5.716v1.953l9-1.385V4.33z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};
const ProfileImage = ({ className = "w-6 h-6 rounded-full" }) => {
  return (
    <img
      className={className}
      src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-70x70.png"
      alt="profile"
    />
  );
};
export default Navbar;
