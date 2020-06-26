import React, { useState } from "react";

import { ChevronDown } from "heroicons-react";
import { LivePill, sampleChannelImage5 } from "../../assets";

const PopularLiveChannels = ({ className }) => {
  const [toggleShowMore, setShowMore] = useState(false);
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
      {!toggleShowMore ? (
        <div className="flex justify-center items-center text-purple-400  mt-5">
          <button
            onClick={() => setShowMore(true)}
            className="flex items-center justify-center text-sm font-semibold hover:bg-gray-800 px-3 py-2 rounded-lg -mb-4 bg-gray-900 w-50"
          >
            <span>Show More</span>
            <span>
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
        </div>
      ) : (
          <div className="flex my-2">
            <LiveChannelDisplay />
            <LiveChannelDisplay />
            <LiveChannelDisplay className="hidden md:block" />
          </div>
        )}
    </div>
  );
};

const LiveChannelDisplay = ({ className }) => {
  return (
    <div className={`flex flex-col w-1/2 md:w-1/3 mr-2 ${className}`}>
      <div className="w-full h-32 bg-gray-600 relative border-l-4 border-b-4 hover:border-purple-700">
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
