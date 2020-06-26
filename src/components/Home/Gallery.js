import React, { useState } from "react";

import { sampleChannelImage4, LivePill } from "../../assets";
import { ChevronLeft, ChevronRight } from "heroicons-react";

const Gallery = ({ className }) => {
  const [currentStream, setCurrentStream] = useState(2);
  const galleryItems = [
    <GalleryItem username="streamer#1" />,
    <GalleryItem username="streamer#2" />,
    <GalleryItem username="streamer#3" />
  ];
  const incrementCurrentStream = () => {
    const newValue = (currentStream + 1) % galleryItems.length;
    setCurrentStream(newValue);
  };
  const decrementCurrentStream = () => {
    if (currentStream - 1 < 0) {
      setCurrentStream(galleryItems.length - 1);
    } else {
      const newValue = (currentStream - 1) % galleryItems.length;
      setCurrentStream(newValue);
    }
  };
  return (
    <div className={className}>
      <div>
        <button
          // disabled={currentStream === 0}
          onClick={decrementCurrentStream}
          className="hover:bg-gray-600 rounded-lg p-1 mr-1"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      </div>
      {galleryItems.filter((el, i) => i === currentStream)}
      <div>
        <button
          // disabled={currentStream === galleryItems.length - 1}
          onClick={incrementCurrentStream}
          className="hover:bg-gray-600 rounded-lg p-1 ml-1"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

const GalleryItem = props => {
  const { username = "Streamer#i", language = "English" } = props;
  return (
    <div className="flex justify-between bg-gray-700 w-full h-full rounded-md shadow-xl">
      <div className="relative w-full md:w-3/5 flex bg-gray-500">
        <div className="absolute z-10 top-0 mt-2 ml-2">
          <LivePill />
        </div>
        <div className="absolute top-0 ml-5 mt-1 z-0 ">
          <ChannelGallerySM {...props} />
        </div>
      </div>
      <div className="hidden md:block md:w-2/5 md:flex md:flex-col md:p-4 md:text-sm md:bg-gray-800">
        <div className="flex items-center">
          <span className="mr-2 overflow-hidden rounded-full">
            <img className="w-10 h-10" src={sampleChannelImage4} alt="user" />
          </span>
          <span>{username}</span>
        </div>
        <div className="my-2">
          <span className="rounded-full bg-gray-700 px-2 py-1 text-sm font-semibold">
            {language}
          </span>
        </div>
        <div className="mt-2">
          <p className="pr-3 text-sm font-semibold">
            Nothing can slow down King Richard today- that's because he counts
            on Xfinity to deliver reliably fast speeds. Come hang out and watch
            the stream!
          </p>
        </div>
      </div>
    </div>
  );
};
const ChannelGallerySM = props => {
  const {
    username = "Streamer#i",
    title = "Snipe King Lets Get it !prime !sum",
    language = "English"
  } = props;
  return (
    <div className="block md:hidden mt-1 flex items-center justify-between">
      <span className="mr-2">
        <img className="w-12 h-12" src={sampleChannelImage4} alt="channel" />
      </span>
      <span>
        <h2 className="underline text-lg font-semibold hover:text-purple-300">
          <a href="#">{username}</a>
        </h2>
        <p>{title}</p>
        <p>
          Playing{" "}
          <span className="underline hover:text-purple-300">
            <a href="#">Call of Duty: Modern Warfare</a>
          </span>
        </p>
      </span>
    </div>
  );
};
// const ChannelHiglight = () => {};
export default Gallery;
