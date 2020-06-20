import React from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar className="bg-gray-800 border-bottom py-2 px-2" />
      <Main className="flex-grow bg-gray-900 text-white flex" />
    </div>
  );
}
