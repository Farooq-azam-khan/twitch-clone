import { TOGGLE_ONLINE, LOGOUT_USER, LOGIN_USER } from "../actions/types";

const initialState = {
  online: false,
  username: "my_username",
  loggedIn: true
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ONLINE:
      return { ...state, online: !state.online };
    case LOGOUT_USER:
      return { ...state, loggedIn: false, online: false };
    case LOGIN_USER:
      return { ...state, username: action.payload, loggedIn: true };
    default:
      return state;
  }
};

export default languageReducer;
