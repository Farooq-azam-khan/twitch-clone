import React from "react";
import ReactDOM from "react-dom";

import "./styles/scrollbar.css";
import "./styles/tailwind.css";
import "./styles/styles.css";

import App from "./App";
import {
  BrowserRouter as Router
} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
