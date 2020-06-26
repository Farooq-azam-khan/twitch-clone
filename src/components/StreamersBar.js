import React, { useState, Fragment } from "react";
import {
  ChevronLeftOutline,
  HeartOutline,
  UserOutline,
  CameraOutline,
  SearchOutline
} from "heroicons-react";

import { Link } from "react-router-dom";


import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Online } from "../assets";
import followingChannels from "../assets/followingChannels";
import popularChannels from "../assets/popularChannels";

const StreamersBar = ({ className, user }) => {
  const [toggleShowMore, setShowMore] = useState(true);
  const handleToggle = e => {
    if (e.target.value === "showFollowing") {
      setShowMore(!toggleShowMore);
    }
  };
  return (
    <div className={className}>
      <div className="bg-gray-800 flex-grow overflow-y-auto w-full">
        {user.loggedIn ? (
          <div className="md:flex md:items-center md:justify-between md:m-2">
            <span className="hidden md:block md:uppercase text-xs">
              Followed Channels
            </span>
            <span>
              <button className="hidden md:block hover:bg-blue-800 p-1 rounded-lg">
                <ChevronLeftOutline className="h-4 w-4 " />
              </button>
            </span>
          </div>
        ) : null}

        {/* small screens display all following channels  */}
        {user.loggedIn ? (
          <ul className="md:hidden flex flex-col items-center md:items-stretch">
            <li className="block md:hidden">
              <HeartOutline className="w-5 h-5" />
            </li>

            {followingChannels.map(fc => (
              <li key={fc.id}>
                <Channel {...fc} />
              </li>
            ))}
          </ul>
        ) : null}

        {/* big screens display top 5 following channels */}
        {user.loggedIn ? (
          <ul className="hidden md:block  md:flex md:flex-col md:items-center md:items-stretch">
            {toggleShowMore ? (
              <Fragment>
                <DisplayTop5Following following={followingChannels} />
                <div className="my-2">
                  <ShowButton onClick={handleToggle} text="Show More" />
                </div>
              </Fragment>
            ) : (
                <Fragment>
                  {followingChannels.map(fc => (
                    <li key={fc.id}>
                      <Channel {...fc} />
                    </li>
                  ))}
                  <div className="my-2">
                    <ShowButton onClick={handleToggle} text="Show Less" />
                  </div>
                </Fragment>
              )}
          </ul>
        ) : null}

        <div className="md:flex md:items-center md:justify-between md:m-2">
          <span className="hidden md:block md:uppercase md:text-xs">
            Popular Channels
          </span>
        </div>
        <ul className="mt-1 md:mt-0 flex flex-col items-center md:items-stretch">
          <li className="md:hidden">
            <CameraOutline className="block md:hidden w-5 h-5" />
          </li>
          {popularChannels.map(fc => (
            <li key={fc.id}>
              <Channel {...fc} isLive />
            </li>
          ))}
        </ul>
        {user.loggedIn ? (
          <div className="block md:hidden mt-1 text-center md:border-t border-blue-700">
            <button>
              <UserOutline className="w-5 h-5" />
            </button>
          </div>
        ) : null}
      </div>
      {user.loggedIn ? (
        <div className="md:relative hidden md:flex bg-gray-800 border-t w-full border-gray-700 md:items-center md:justify-center">
          <input
            className="block mx-2 my-2 bg-gray-700 text-gray-500 w-full pl-8 pr-3 py-2 rounded-lg text-sm leading-none"
            placeholder="Search to Add Friends"
          />
          <div className="absolute left-0">
            <SearchOutline className="ml-3 text-gray-500 w-5 h-5" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const ShowButton = ({ text, onClick }) => {
  return (
    <button
      value="showFollowing"
      onClick={onClick}
      className=" hover:underline text-sm text-purple-400 text-left"
    >
      {text}
    </button>
  );
};

const DisplayTop5Following = ({ following }) => {
  return following
    .filter((_, i) => i < 5)
    .map(fc => (
      <li key={fc.id}>
        <Channel {...fc} />
      </li>
    ));
};
const Channel = props => {
  const {
    username,
    streamTitle,
    category,
    imgUrl,
    views = "16.6K",
    isLive = false
  } = props;
  console.log({ props })
  const streamerImage = (
    <img
      className={`rounded-full h-8 w-8 ${!isLive ? "not-live" : null}`}
      alt={username}
      src={imgUrl}
    />
  );
  return (
    <Link to={`/${username}`}>
      <div className="relative md:py-1 md:px-2 flex flex-cols justify-center md:justify-between md:group md:hover:bg-blue-800 md:py-1 cursor-pointer">
        <span className="m-1 md:hidden block">{streamerImage}</span>
        <span className="md:block md:inline-flex md:items-center hidden">
          {streamerImage}
          <span>{streamTitle} </span>
          <span className="ml-2 text-xs">
            {username}
            <br />
            {category}
          </span>
        </span>
        <span className="md:block hidden md:inline-flex md:items-center">
          {isLive ? <Online className="h-2 w-2 mr-1" /> : null}
          <span className="text-xs">{isLive ? views : "Offline"}</span>
        </span>
      </div>
    </Link>
  );
};

StreamersBar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  {}
)(StreamersBar);
