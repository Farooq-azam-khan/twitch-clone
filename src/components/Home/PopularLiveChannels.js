import React from "react";

import { ChevronDown } from "heroicons-react";
import { LivePill, sampleChannelImage5 } from "../../assets";

const PopularLiveChannels = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h2 className="font-bold text-xl">Popular Live Channels</h2>
      </div>
      <div className="flex mt-2">
        <LiveChannelDisplay />
        <LiveChannelDisplay />
        <LiveChannelDisplay className="hidden md:block" />
      </div>
      <div className="flex justify-center items-center text-purple-400 hover:bg-gray-800 px-2 py-2 rounded-lg mt-5">
        <span>
          <button className="text-xs font-semibold">Show More</button>
        </span>
        <span>
          <ChevronDown className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

const LiveChannelDisplay = ({ className }) => {
  return (
    <div className={`flex flex-col w-1/2 md:w-1/3 mr-2 ${className}`}>
      <div className="w-full h-32 bg-gray-600 relative">
        <div className="absolute top-0 mt-1 ml-2">
          <LivePill />
        </div>
      </div>
      <div className="flex mt-2">
        <span className="overflow-hidden rounded-full">
          <img className="w-10 h-10" src={sampleChannelImage5} alt="channel" />
        </span>
      </div>
    </div>
  );
};

export default PopularLiveChannels;
