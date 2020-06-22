import React, { useState } from "react";
import {
  DotsHorizontal,
  Search,
  AnnotationOutline,
  BellOutline,
  DesktopComputerOutline,
  Heart,
  DuplicateOutline,
  Briefcase
} from "heroicons-react";

import { TwitchLogo, ProfileImage, BitsIcon, MusicIcon } from "../../assets";

import UserProfileDropdown from "./UserProfileDropdown";
import LanguageDropdown from "./LanguageDropdown";
import MoreDropdown from "./MoreDropdown";
import BitsDropdown from "./BitsDropdown";
import PrimeLootDropdown from "./PrimeLootDropdown";
import NotificationDropdown from "./NotificationDropdown";
import MobileSearchDropdown from "./MobileSearchDropdown";
import WhispersDropdown from "./WhispersDropdown";

const Navbar = ({ className }) => {
  const [toggleProfile, setProfile] = useState(false);
  const [toggleMoreDropdown, setMoreDropdown] = useState(false);
  const [toggleBitsDropdown, setBitsDropdown] = useState(false);
  const [togglePrimelootDropdown, setPrimelootDropdown] = useState(false);
  const [toggleNotification, setNotificationDropdown] = useState(false);
  const [toggleSearch, setSearchDropdown] = useState(false);
  const [toggleWhispersDropdown, setWhispersDropdown] = useState(true);
  const [toggleLanguageDropdown, setLanguageDropdown] = useState(false);

  const handleWhispersDropdown = () => {
    setWhispersDropdown(!toggleWhispersDropdown);
  };
  const handleLanguage = () => {
    console.log("toggle language");
    setLanguageDropdown(!toggleLanguageDropdown);
    setProfile(!toggleProfile);
  };

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
          <span className="relative text-white mr-1">
            <button
              onClick={handleWhispersDropdown}
              className="hover:bg-gray-700 rounded-lg p-1"
            >
              <AnnotationOutline className="w-5 h-5" />
            </button>

            {toggleWhispersDropdown ? (
              <WhispersDropdown toggleClose={handleWhispersDropdown} />
            ) : null}
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
            {toggleProfile && !toggleLanguageDropdown ? (
              <UserProfileDropdown handleLanguage={handleLanguage} />
            ) : null}
            {toggleLanguageDropdown && !toggleProfile ? (
              <LanguageDropdown toggleClose={handleLanguage} />
            ) : null}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
