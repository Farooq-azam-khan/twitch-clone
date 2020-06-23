import { combineReducers } from "redux";

import darkModeReducer from "./darkModeReducer";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  language: languageReducer
});

export default rootReducer;
