import React from "react";
import ReactDOM from "react-dom";

import "./styles/scrollbar.css";
import "./styles/tailwind.css";
import "./styles/styles.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
