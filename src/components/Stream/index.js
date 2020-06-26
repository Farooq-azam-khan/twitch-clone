import React from 'react'

import ChatSection from './ChatSection';

import * as Icons from 'heroicons-react';

import { sampleChannelImage4 } from '../../assets';

const Stream = ({ className }) => {
    return (
        <section className={className}>
            <div className="w-9/12 flex-grow flex flex-col space-y-3 overflow-auto">
                {/* video section */}
                <section className="w-full h-64 bg-orange-700">
                    <img className="w-full h-full" src="" />
                </section>
                {/* channel activities */}
                <section className="w-full flex items-center justify-between">
                    <div className="inline-flex space-x-2 pl-3">
                        <div className="overflow-hidden w-12 h-12 border-2 border-purple-700 rounded-full">
                            <img className="w-full h-full" src={sampleChannelImage4} />
                        </div>
                        <div className="">
                            <div className="inline-flex items-center space-x-2">
                                <span><h2 className="font-bold text-md hover:underline"><a href="#">XQCow</a></h2></span>
                                <span><Icons.BadgeCheck className="w-6 h-6" /></span>
                            </div>
                            <div className="font-bold text-lg"><h1>This is the title</h1></div>
                            <div className="inline-flex items-center space-x-2">
                                <span><a className="text-purple-500 text-sm" href="#">Just Chatting</a></span>
                                <a className="text-xs px-2 py-1 hover:bg-gray-700 bg-gray-800 rounded-full" href="#">English</a>
                                <a className="text-xs px-2 py-1 hover:bg-gray-700 bg-gray-800 rounded-full" href="#">News</a>
                                <a className="text-xs px-2 py-1 hover:bg-gray-700 bg-gray-800 rounded-full" href="#">Educational</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-3 px-2 h-full py-3">
                            <button><Icons.Heart className="w-6 h-6" /></button>
                            <button><Icons.Bell className="w-6 h-6" /></button>
                            <button className="inline-flex space-x-1 items-center bg-purple-600 px-3 py-1 rounded-lg">
                                <span><Icons.StarOutline className="w-6 h-6" /></span>
                                <span>Subscribe</span>
                                <span><Icons.ChevronDown className="w-6 h-6" /></span>
                            </button>
                        </div>
                        <div className="inline-flex items-center justify-between space-x-3">
                            <span className="inline-flex items-center justify-between space-x-1 text-red-600">
                                <span><Icons.UserCircle /></span><span>21,000</span>
                            </span>
                            <span>2:56:00</span>
                            <button><Icons.ArrowCircleUp className="w-6 h-6" /></button>
                            <button><Icons.DotsVertical className="w-6 h-6" /></button>
                        </div>
                    </div>
                </section>
                {/* channel description */}
            </div>
            <ChatSection className="w-3/12 bg-gray-800 flex flex-col" />
        </section>
    )
}

export default Stream
