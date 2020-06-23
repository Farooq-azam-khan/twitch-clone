import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <Navbar className="bg-gray-800 border-bottom py-2 px-2" />
        <Main className="flex-grow bg-gray-900 text-white flex items-start overflow-auto" />
      </div>
    </Provider>
  );
};

export default App;
