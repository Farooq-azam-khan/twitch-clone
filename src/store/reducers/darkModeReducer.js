import { TOGGLE_DARK_MODE } from "../actions/types";

const initialState = true;
const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
