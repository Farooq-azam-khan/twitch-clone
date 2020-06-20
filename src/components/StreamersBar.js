import React from "react";
import {
  ChevronLeftOutline,
  // ChevronRightOutline,
  HeartOutline,
  CameraOutline
} from "heroicons-react";

const sampleChannelImage =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/cd921fcd-53fc-4b1d-be23-0787bc36b756-profile_image-70x70.png";
const StreamersBar = ({ className }) => {
  return (
    <div className={className}>
      <div className="md:flex md:items-center md:justify-between md:m-2">
        <span className="hidden md:block md:uppercase text-xs">
          Followed Channels
        </span>
        <span>
          <button className="hidden md:block hover:bg-blue-800 p-1 rounded-lg">
            <ChevronLeftOutline className="h-4 w-4 " />
            {/* <ChevronRightOutline className="h-4 w-4" /> */}
          </button>
        </span>
      </div>
      <ul className="flex flex-col items-center md:items-stretch">
        <li>
          <HeartOutline className="block md:hidden w-5 h-5" />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="Just Chatting"
            imgUrl={sampleChannelImage}
            isLive
            views="1M"
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="The Last of Us Part II"
            imgUrl={sampleChannelImage}
            isLive
            views="100K"
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
            views="100K"
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="10 new Videos"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="1 new Viewo"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="4 new Videos"
            imgUrl={sampleChannelImage}
          />
        </li>
      </ul>

      <div className="md:flex md:items-center md:justify-between md:m-2">
        <span className="hidden md:block md:uppercase md:text-xs">
          Popular Channels
        </span>
      </div>
      <ul className="mt-1 md:mt-0 flex flex-col items-center md:items-stretch">
        <li className="md:hidden">
          <CameraOutline className="block md:hidden w-5 h-5" />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
            isLive
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
          />
        </li>
        <li>
          <Channel
            username="GMHikaru"
            category="chess"
            imgUrl={sampleChannelImage}
          />
        </li>
      </ul>
    </div>
  );
};

const Online = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="none"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

const Channel = ({
  username,
  streamTitle,
  category,
  imgUrl,
  views = "16.6K",
  isLive = false
}) => {
  const streamerImage = (
    <img
      className={`rounded-full h-8 w-8 ${!isLive ? "not-live" : null}`}
      alt={username}
      src={imgUrl}
    />
  );
  return (
    <div className="md:py-1 md:px-2 flex flex-cols justify-center md:justify-between md:group md:hover:bg-blue-800 md:py-1 cursor-pointer">
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
        {isLive ? <Online className="h-2 w-2" /> : null}
        <span className="text-xs">{isLive ? views : "Offline"}</span>
      </span>
    </div>
  );
};

export default StreamersBar;
