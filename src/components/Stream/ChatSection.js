import React, { useState } from "react";

import * as Icons from 'heroicons-react'
const ChatSection = ({ className }) => {
  const [toggleSettings, showSettings] = useState(false)
  const handleSettings = () => { showSettings(!toggleSettings) }

  return <div className={className}>
    <header className="px-3 border-b border-gray-200">
      <span className="uppercase text-sm font-bold">Stream Chat</span>
    </header>
    <div className="border-b border-gray-200"><span className="px-2">presents</span></div>
    {/* chat section */}
    <section className="overflow-auto pl-3 text-sm">Occaecat et ea ex ut deserunt consectetur culpa pariatur enim incididunt aute sit duis. Elit commodo minim nisi ea laboris in irure elit sunt reprehenderit. Reprehenderit excepteur do elit elit excepteur aute. In excepteur aliquip laborum eiusmod proident ea commodo reprehenderit dolore occaecat exercitation nostrud nisi Lorem. Voluptate ipsum laborum fugiat minim dolore consectetur. Ipsum cupidatat non quis ullamco occaecat ad tempor excepteur veniam Lorem dolore nulla. Tempor duis ea sint elit ipsum exercitation officia dolore tempor veniam duis.

    Labore ipsum do proident reprehenderit aliquip minim adipisicing. Excepteur culpa occaecat excepteur minim. Commodo enim fugiat sint consectetur sint officia occaecat proident sit. Cupidatat laborum minim non consectetur velit officia. Occaecat exercitation adipisicing quis enim cupidatat adipisicing tempor commodo velit officia.

    Magna deserunt anim elit nisi velit laboris ipsum. Culpa nisi amet adipisicing non non consectetur nulla magna in fugiat ea. Nostrud nulla magna dolor duis proident voluptate excepteur et magna non duis occaecat velit. Sint elit amet tempor eu enim dolore aute esse adipisicing. Incididunt veniam duis irure esse esse nulla proident veniam dolore aute.

    Dolor sunt sit sint adipisicing officia. Excepteur laboris non fugiat sit consectetur est ullamco occaecat. Ullamco anim officia quis velit ut eu culpa sint aliquip. Consequat dolor nulla do sunt non adipisicing qui excepteur enim exercitation magna. Sint ex consequat nisi occaecat ea est consectetur officia. Consectetur proident qui sunt deserunt nisi ex.

    Eiusmod incididunt cillum minim cupidatat commodo. Officia irure tempor ut laboris voluptate anim duis. Ipsum incididunt non ex qui. Ullamco qui in in esse reprehenderit voluptate et Lorem adipisicing deserunt anim ipsum. Velit deserunt quis laboris fugiat sunt cupidatat excepteur. Dolore sunt mollit proident consectetur aute do exercitation nostrud exercitation. Voluptate sunt est amet exercitation dolore id.

    Anim anim dolor dolor pariatur id cupidatat nostrud. Deserunt culpa amet consequat consectetur consectetur proident fugiat nostrud pariatur aliquip culpa. Dolor aute ex amet fugiat ipsum fugiat culpa. Culpa sint elit occaecat ut officia esse.

    Laboris labore excepteur laborum est. Adipisicing qui dolor labore quis commodo labore aliqua aliquip et. In id sint laborum mollit occaecat et eu ipsum. Labore velit laborum ullamco enim culpa fugiat deserunt esse eiusmod do eiusmod. Commodo veniam irure sunt officia labore do elit.

    Eu et culpa veniam esse aliquip adipisicing fugiat cillum reprehenderit sint ex culpa sit dolor. Ea ut commodo est aliquip ullamco dolor quis ullamco aliqua non ad amet commodo minim. Commodo anim aliquip velit do. Mollit commodo fugiat sit consequat tempor. Sint occaecat consequat ex sit.

    Cillum ullamco labore laborum adipisicing voluptate nisi tempor labore quis culpa fugiat aute anim. Aliqua laborum in fugiat in exercitation laborum exercitation sint velit minim nulla nisi officia. Dolore aute sunt culpa velit consectetur excepteur nostrud enim sint. Est enim esse pariatur amet quis dolore velit laboris. Do aute duis duis veniam ad esse tempor ullamco. Non amet consequat irure anim ea ex commodo. Pariatur sit reprehenderit incididunt et sint nisi eu duis cupidatat aliqua amet adipisicing incididunt elit.

    Proident voluptate irure minim eiusmod et reprehenderit qui consequat consequat aliqua. Esse dolore dolore veniam pariatur cillum enim. Ea quis in aute reprehenderit dolor aliquip. Quis occaecat magna sit reprehenderit cupidatat. Nulla dolor dolor veniam eu non in est. Consequat ex tempor eiusmod tempor non.
</section>
    <div className="mt-2 px-1"><input placeholder="Send a message" className="w-full px-3 py-2 rounded-lg h-full bg-gray-700 border-transparent focus:border-purple-900 focus:bg-black" /></div>
    <div className="inline-flex items-center justify-between px-3 py-2">
      <button className="text-xs hover:bg-gray-700 hover:text-gray-300 rounded-lg px-2 py-1 w-1/3 h-full">2.3K</button>
      <span className="relative inline-flex items-center justify-between space-x-1">
        <span className="relative h-6 w-6">

          <button onClick={handleSettings}><Icons.CogOutline className="w-full h-full" /></button>
          {toggleSettings ? <>
            <button onClick={() => showSettings(false)} className="fixed z-10 w-full h-full inset-0"></button>
            <Settings close={showSettings} />
          </> : null}
        </span>
        <button className="bg-purple-700 px-3 py-1 rounded-lg">chat</button>

      </span>
    </div>
  </div >;
};

const Settings = ({ close }) => {
  return (<div className="absolute z-20 bottom-0 border border-gray-800 right-0 flex flex-col space-y-3  bg-gray-900 rounded-lg shadow-xl w-64 h-64 p-2">
    <header className="inline-flex items-center">
      <h3 className="flex-grow text-sm justify-center">Chat Settings</h3>
      <button onClick={() => close(false)}><Icons.XOutline className="w-6 h-6" /></button>
    </header>
    <div className="flex flex-col space-y-1 px-1">
      <div className="text-gray-500 uppercase text-sm">Identiy</div>
      <button className="inline-flex items-center w-full justify-between hover:bg-purple-800 rounded-lg px-1 py-1">
        <span>my-username</span>
        <span className="inline-flex items-center justify-between space-x-1"><span>edit</span><span><Icons.ChevronRight /></span></span>
      </button>
    </div>

  </div>)
}
export default ChatSection;
