import React from "react";
import {
  MoonOutline,
  GlobeAltOutline,
  ChevronRightOutline,
  CogOutline,
  LogoutOutline,
  StarOutline
} from "heroicons-react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleDarkMode } from "../../store/actions/darkModeActions";
import {
  toggleOnlineAction,
  logOutUserAction,
  logInUserAction
} from "../../store/actions/userActions";

import { OfflineIcon, Online, ProfileImage } from "../../assets";

const UserProfileDropdown = props => {
  const {
    username = "my_username",
    handleLanguage,
    darkMode,
    toggleDarkMode,
    user,
    toggleOnlineAction,
    logOutUserAction,
    logInUserAction
  } = props;
  return (
    <div className="absolute z-30 right-0 mt-3 flex flex-col bg-gray-800 text-sm text-white py-2 px-3 w-48 h-64 rounded-lg shadow-xl overflow-auto">
      {/* user header */}
      {user.loggedIn ? (
        <header className="flex flex-col border-b py-2 border-gray-500">
          <div className="inline-flex items-center">
            <div className="mr-2">
              <ProfileImage className="w-10 h-10 rounded-full" />
            </div>
            <div>
              {username}
              <br />
              {user.online ? (
                <span className="inline-flex items-center">
                  <span className="mr-2">
                    <Online className="w-2 h-2" />
                  </span>
                  <span>Online</span>
                </span>
              ) : (
                  <span className="inline-flex items-center">
                    <OfflineIcon className="w-2 h-2" />
                    <span className="ml-1">
                      {user.online ? "Online" : "Offline"}
                    </span>
                  </span>
                )}
            </div>
          </div>
          <button
            onClick={() => toggleOnlineAction()}
            className="block w-full inline-flex items-center justify-between hover:bg-gray-700 rounded-lg px-2 py-1 mt-1"
          >
            <span>{user.online ? "Online" : "Offline"}</span>
            <span
              className={`${
                user.online ? "text-purple-500" : "text-purple-300"
                }`}
            >
              toggle
            </span>
          </button>
        </header>
      ) : null}
      {user.loggedIn ? (
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
      ) : null}
      {user.loggedIn ? (
        <section className="mt-2 border-b py-2 border-gray-500">
          <div className="hover:bg-gray-700 rounded-lg px-2 py-2">Friends</div>
          <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
            <button className="inline-flex items-center">
              <span className="mr-1">
                <StarOutline className="w-4 h-4" />
              </span>
              <span>Subscriptions</span>
            </button>
          </div>
          <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
            Inventory
          </div>
          <div className="hover:bg-gray-700 rounded-lg px-2 py-2">Wallet</div>
        </section>
      ) : null}
      <section className="mt-2 border-b py-2 border-gray-500">
        <div className="hover:bg-gray-700 rounded-lg px-2 py-2">
          <div className="inline-flex items-center">
            <span className="mr-1">
              <CogOutline className="h-4 w-4" />
            </span>
            <span>Setting</span>
          </div>
        </div>
        {/* languages */}
        <button
          value="language"
          onClick={handleLanguage}
          className="w-full block hover:bg-gray-700 rounded-lg  px-2 py-2"
        >
          <div className="flex items-center justify-between">
            <span className="flex-grow inline-flex items-center">
              <span className="mr-1">
                <GlobeAltOutline className="w-4 h-4" />
              </span>
              <span>Language</span>
            </span>
            <span>
              <ChevronRightOutline className="w-4 h-4" />
            </span>
          </div>
        </button>
        {/* dark mode */}
        <button
          onClick={() => {
            toggleDarkMode();
          }}
          className="block w-full hover:bg-gray-700 rounded-lg px-2 py-2"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center">
              <span className="mr-1">
                <MoonOutline className="w-4 h-4" />
              </span>
              <span>Dark Theme</span>
            </span>
            <div>{darkMode ? "on" : "off"}</div>
          </div>
        </button>
      </section>
      {/* logout action */}
      <section className="mt-2 hover:bg-gray-700 rounded-lg ">
        {user.loggedIn ? (
          <button
            onClick={() => logOutUserAction()}
            className="w-full h-full w-full h-full inline-flex items-center px-2 py-1"
          >
            <span className="mr-1">
              <LogoutOutline className="w-4 h-4" />
            </span>
            <span>Logout</span>
          </button>
        ) : (
            <button
              onClick={() => logInUserAction("my_username")}
              className="w-full h-full inline-flex items-center px-2 py-1"
            >
              <span className="mr-1">
                <LogoutOutline className="w-4 h-4" />
              </span>
              <span>Login</span>
            </button>
          )}
      </section>
    </div>
  );
};

UserProfileDropdown.propTypes = {
  username: PropTypes.string,
  handleLanguage: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleOnlineAction: PropTypes.func.isRequired,
  logOutUserAction: PropTypes.func.isRequired,
  logInUserAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ darkMode, user }) => ({ darkMode, user });

export default connect(
  mapStateToProps,
  { toggleDarkMode, toggleOnlineAction, logOutUserAction, logInUserAction }
)(UserProfileDropdown);
