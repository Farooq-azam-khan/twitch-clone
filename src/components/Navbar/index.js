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

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logInUserAction } from "../../store/actions/userActions";

import { TwitchLogo, ProfileImage, BitsIcon, MusicIcon } from "../../assets";

import UserProfileDropdown from "./UserProfileDropdown";
import LanguageDropdown from "./LanguageDropdown";
import MoreDropdown from "./MoreDropdown";
import BitsDropdown from "./BitsDropdown";
import PrimeLootDropdown from "./PrimeLootDropdown";
import NotificationDropdown from "./NotificationDropdown";
import MobileSearchDropdown from "./MobileSearchDropdown";
import WhispersDropdown from "./WhispersDropdown";
import UserActivityModal from "../UserActivityModal";

const Navbar = ({ className, logInUserAction, user }) => {
  const [toggleProfile, setProfile] = useState(false);
  const [toggleMoreDropdown, setMoreDropdown] = useState(false);
  const [toggleBitsDropdown, setBitsDropdown] = useState(false);
  const [togglePrimelootDropdown, setPrimelootDropdown] = useState(false);
  const [toggleNotification, setNotificationDropdown] = useState(false);
  const [toggleSearch, setSearchDropdown] = useState(false);
  const [toggleWhispersDropdown, setWhispersDropdown] = useState(false);
  const [toggleLanguageDropdown, setLanguageDropdown] = useState(false);
  const [toggleUserActivityModal, setUserActivityModal] = useState(false);

  const setFalse = list => {
    list.map(e => e(false));
  };
  const handleDropdown = e => {
    switch (e.target.value) {
      case "more":
        setFalse([
          setProfile,
          setBitsDropdown,
          setPrimelootDropdown,
          setNotificationDropdown,
          setSearchDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setMoreDropdown(!toggleMoreDropdown);
        break;
      case "search-mobile":
        setFalse([
          setProfile,
          setBitsDropdown,
          setPrimelootDropdown,
          setNotificationDropdown,
          setMoreDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setSearchDropdown(!toggleSearch);
        break;
      case "prime-loot":
        setFalse([
          setProfile,
          setBitsDropdown,
          setMoreDropdown,
          setNotificationDropdown,
          setSearchDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setPrimelootDropdown(!togglePrimelootDropdown);
        break;
      case "notification":
        setFalse([
          setProfile,
          setBitsDropdown,
          setMoreDropdown,
          setPrimelootDropdown,
          setMoreDropdown,
          setSearchDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setNotificationDropdown(!toggleNotification);
        break;
      case "whisper":
        setFalse([
          setProfile,
          setBitsDropdown,
          setMoreDropdown,
          setNotificationDropdown,
          setSearchDropdown,
          setPrimelootDropdown,
          setMoreDropdown,
          setLanguageDropdown
        ]);
        setWhispersDropdown(!toggleWhispersDropdown);
        break;
      case "bits":
        setFalse([
          setProfile,
          setMoreDropdown,
          setMoreDropdown,
          setNotificationDropdown,
          setSearchDropdown,
          setPrimelootDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setBitsDropdown(!toggleBitsDropdown);
        break;

      default:
        setFalse([
          setMoreDropdown,
          setPrimelootDropdown,
          setBitsDropdown,
          setMoreDropdown,
          setNotificationDropdown,
          setSearchDropdown,
          setWhispersDropdown,
          setLanguageDropdown
        ]);
        setProfile(!toggleProfile);
    }
  };
  const handleWhispersDropdown = () => {
    setWhispersDropdown(!toggleWhispersDropdown);
  };
  const handleLanguage = () => {
    console.log("toggle language");
    setLanguageDropdown(!toggleLanguageDropdown);
    setProfile(!toggleProfile);
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
              value="more"
              onClick={handleDropdown}
              className="relative z-20 hover:bg-gray-700 rounded-lg p-1"
            >
              <DotsHorizontal className="w-5 h-5 " />
            </button>
            {toggleMoreDropdown ? <MoreDropdown /> : null}
          </span>
        </span>
        {/* md or higher search */}
        <span className="hidden md:flex md:items-center md:justify-between overflow-hidden md:rounded-lg md:h-8">
          <span className="flex-grow h-full">
            <input
              className="pl-2 h-full focus:border-purple-900 focus:border-2 bg-gray-700 p-1 text-white text-sm leading-none font-semibold"
              placeholder="Search"
            />
          </span>
          <span className="bg-red-800 flex items-center h-full">
            <button className="bg-gray-900 h-full">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
          </span>
        </span>

        {/* mobile search  */}
        <span className="inline-flex items-center">
          <span className="md:hidden text-white mr-1">
            <button
              value="search-mobile"
              onClick={handleDropdown}
              className="relative z-20 hover:bg-gray-700 rounded-lg p-1"
            >
              <Search className="w-5 h-5" />
            </button>
            {toggleSearch ? <MobileSearchDropdown /> : null}
          </span>

          {/* prime loot */}
          <span className="relative text-white mr-1">
            <button
              value="prime-loot"
              onClick={handleDropdown}
              className="relative z-20 hover:bg-gray-700 rounded-lg p-1"
            >
              <DesktopComputerOutline className="w-5 h-5" />
              {!togglePrimelootDropdown ? <NewNotification amount="1" /> : null}
            </button>
            {togglePrimelootDropdown ? (
              <PrimeLootDropdown close={handlePrimeLoot} />
            ) : null}
          </span>

          {/* notification */}
          {user.loggedIn ? (
            <span className="relative text-white mr-1">
              <button
                value="notification"
                onClick={handleDropdown}
                className="relative z-20 hover:bg-gray-700 rounded-lg p-1"
              >
                <BellOutline className="w-5 h-5" />
              </button>

              {toggleNotification ? (
                <NotificationDropdown close={handleNotification} />
              ) : null}
            </span>
          ) : null}
          {/* whispers */}
          {user.loggedIn ? (
            <span className="relative text-white mr-1">
              <button
                value="whisper"
                onClick={handleDropdown}
                className="relative z-20 hover:bg-gray-700 rounded-lg p-1"
              >
                <AnnotationOutline className="w-5 h-5" />
              </button>

              {toggleWhispersDropdown ? (
                <WhispersDropdown toggleClose={handleWhispersDropdown} />
              ) : null}
            </span>
          ) : null}
          {/* bits button */}
          {user.loggedIn ? (
            <span className="relative mr-2">
              <button
                value="bits"
                onClick={handleDropdown}
                className="block relative z-20 text-white hover:bg-gray-700 rounded-lg p-1 md:hidden"
              >
                <BitsIcon className="w-4 h-4" />
              </button>
              <button
                value="bits"
                onClick={handleDropdown}
                className="hidden md:block md:inline-flex md:items-center md:relative md:z-20 bg-gray-700 px-2 py-1 text-white hover:bg-gray-600"
              >
                <BitsIcon className="w-4 h-4" />
                <span className="text-sm">Get Bits</span>
              </button>

              {toggleBitsDropdown ? <BitsDropdown /> : null}
            </span>
          ) : null}

          {/* login button */}
          {!user.loggedIn ? (
            <span className="bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm leading-none mr-2">
              <button
                className="w-full h-full px-3 py-2"
                onClick={() => setUserActivityModal(true)}
              >
                Login
              </button>
            </span>
          ) : null}
          {/* signup button */}
          {!user.loggedIn ? (
            <span className="bg-purple-700 hover:bg-purple-800 rounded-lg text-white text-sm leading-none  mr-2">
              <button
                onClick={() => setUserActivityModal(true)}
                className="w-full h-full px-3 py-2"
              >
                Sign Up
              </button>
            </span>
          ) : null}

          {/* profile */}
          <span className="relative">
            <button
              value="profile"
              className="relative z-20"
              onClick={handleDropdown}
            >
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
      {toggleUserActivityModal ? (
        <div>
          <button
            onClick={() => setUserActivityModal(false)}
            className="fixed z-20 inset-0 w-full h-full cursor-default bg-black opacity-75"
          />
          <UserActivityModal close={setUserActivityModal} />
        </div>
      ) : null}
      {toggleProfile ||
      toggleLanguageDropdown ||
      toggleMoreDropdown ||
      toggleBitsDropdown ||
      togglePrimelootDropdown ||
      toggleNotification ||
      toggleSearch ||
      toggleWhispersDropdown ? (
        <button
          tabIndex="-1"
          onClick={() => {
            setProfile(false);
            setLanguageDropdown(false);
            setMoreDropdown(false);
            setNotificationDropdown(false);
            setPrimelootDropdown(false);
            setSearchDropdown(false);
            setWhispersDropdown(false);
            setBitsDropdown(false);
          }}
          className="fixed z-10 inset-0 w-full h-full cursor-default"
        />
      ) : null}
    </div>
  );
};

const NewNotification = ({ amount }) => {
  return (
    <div className="absolute z-20 -mt-1 flex items-center justify-center text-center shadow-lg h-4 w-4 p-0 bg-red-600 top-0 right-0 rounded-full text-xs leading-none">
      <span>{amount}</span>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  logInUserAction: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  { logInUserAction }
)(Navbar);
