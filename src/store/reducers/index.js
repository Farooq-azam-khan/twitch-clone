import { combineReducers } from "redux";

import darkModeReducer from "./darkModeReducer";
import languageReducer from "./languageReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  language: languageReducer,
  user: userReducer
});

export default rootReducer;
