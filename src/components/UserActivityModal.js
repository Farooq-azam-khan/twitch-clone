import React, { useState } from "react";

import PropTypes from "prop-types";
import { X } from "heroicons-react";

import { TwitchLogo } from "../assets";

const UserActivityModal = ({ close, buttonValue = "login-up" }) => {
  const [toggleSignUp, setSignUp] = useState(
    buttonValue === "sign-up" ? true : false
  );
  return (
    <div className="fixed top-0 z-30 inline-flex text-white">
      <div className="overflow-auto flex-grow bg-gray-900 rounded-lg max-w-lg">
        <div className="mt-8 mx-8">
          <div className="inline-flex items-center justify-between">
            <div className="mr-2">
              <TwitchLogo />
            </div>
            {toggleSignUp ? (
              <h2 className="font-bold text-lg">Join Twitch Today</h2>
            ) : (
              <div className="font-bold text-lg">Log in to Twitch</div>
            )}
          </div>
          <nav className="font-bold mt-2 text-sm border-b border-gray-700 pb-1">
            <ul className="flex justify-left">
              <li
                className={`mr-5 ${
                  !toggleSignUp
                    ? "border-b-2 border-purple-400 text-purple-400 pb-1 -mb-1"
                    : null
                }`}
              >
                <button onClick={() => setSignUp(false)}>Log In</button>
              </li>
              <li
                className={`mr-5 ${
                  toggleSignUp
                    ? "border-b-2 border-purple-400 text-purple-400 pb-1 -mb-1"
                    : null
                }`}
              >
                <button onClick={() => setSignUp(true)}>Sign Up</button>
              </li>
            </ul>
          </nav>
          {!toggleSignUp ? (
            <div className="flex flex-col mt-2">
              <label>
                Username
                <br />
                <input
                  type="email"
                  className="w-full rounded-lg bg-gray-800 px-2 py-1"
                />
              </label>
              <label className="mt-2">
                Password
                <br />
                <input className="w-full rounded-lg bg-gray-800 px-2 py-1" />
              </label>
              <div className="mt-1">
                <a className="text-purple-400 text-xs" href="#">
                  Trouble logging in?
                </a>
              </div>
              <div className="w-full my-3">
                <button className="w-full h-full text-center bg-gray-700 rounded py-1">
                  Log In
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col mt-2">
              <label>
                Username
                <br />
                <input
                  type="email"
                  className="w-full rounded-lg bg-gray-800 px-2 py-1"
                />
              </label>
              <label className="mt-2">
                Password
                <br />
                <input className="w-full rounded-lg bg-gray-800 px-2 py-1" />
              </label>
              <label className="mt-2">
                Confirm Password
                <br />
                <input className="w-full rounded-lg bg-gray-800 px-2 py-1" />
              </label>
              <div className="mt-2">Date of Birth</div>
              <div className="flex items-center justify-between p-0">
                <div className="w-2/4 mr-1">
                  <select className="w-full px-2 py-1 bg-gray-800 rounded-lg">
                    <option>Month</option>
                  </select>
                </div>
                <div className="w-1/4 mr-1">
                  <input
                    className="w-full px-2 py-1 rounded-lg bg-gray-800 text-white"
                    placeholder="Day"
                  />
                </div>
                <div className="w-1/4">
                  <input
                    className="w-full px-2 py-1 rounded-lg bg-gray-800 text-white"
                    placeholder="Day"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label>
                  Email
                  <br />
                  <input className="px-2 py-1 rounded w-full bg-gray-800" />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By clicking Sign Up, you are indicating that you have read and
                acknowledge the{" "}
                <a className="font-semibold text-purple-500" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="font-semibold text-purple-500" href="#">
                  Privacy Notice
                </a>
                .
              </p>

              <div className="mt-4 mb-3 flex items-center justify-center">
                <button className="bg-gray-700 rounded-lg w-full px-2 py-1 text-center text-sm ">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ml-2">
        <button
          onClick={() => close(false)}
          className="w-full hover:bg-gray-600 rounded-lg"
        >
          <X className="text-white" />
        </button>
      </div>
    </div>
    // </div>
  );
};

UserActivityModal.propTypes = {
  close: PropTypes.func.isRequired
};

export default UserActivityModal;
