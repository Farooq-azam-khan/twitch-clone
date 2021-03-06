import React from "react";

import Home from "./Home";
import StreamersBar from "./StreamersBar";
import {
  Switch,
  Route,
} from "react-router-dom";

import Stream from './Stream';

const Main = ({ className }) => {
  return (
    <div className={className}>
      <StreamersBar className="h-full w-1/12 md:w-1/5 bg-blue-900 flex flex-col items-center p-0 justify-center" />
      <Switch>
        <Route exact path="/">
          <Home className="flex-grow w-11/12 md:w-3/5 flex flex-col h-full overflow-auto" />
        </Route>
        <Route exact path="/:id">
          <Stream className="flex-grow w-11/12 md:w-3/5 flex h-full" />
        </Route>

      </Switch>
    </div >
  );
};

export default Main;
