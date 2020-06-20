import React from "react";

const BitsDropdown = () => {
  return (
    <div className="absolute flex flex-col px-4 py-5 top-0 w-64 shadow-xl right-0 top-0 mt-10 bg-gray-800 text-white">
      <div>
        <h2 className="text-md text-center font-bold">
          Join the Party with with Bits
        </h2>
      </div>
      <div>
        <p className="pl-2 text-sm mt-2">
          Celebrate big moments and support your favorite streamers with special
          animated emotes!{" "}
          <a href="#" className="text-purple-500">
            Learn more
          </a>
        </p>
      </div>
      <div>
        <img src="https://d3aqoihi2n8ty8.cloudfront.net/bits-card/intro/dark/bits-new-user-dark.gif" />
      </div>
      <div className="flex-grow">
        <button className="bg-purple-600 font-semibold rounded-lg text-sm leading-none px-4 py-3 mt-3">
          First-Time purchaser Discount
        </button>
      </div>
    </div>
  );
};
export default BitsDropdown;
