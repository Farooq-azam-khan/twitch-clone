import { TOGGLE_ONLINE, LOGOUT_USER, LOGIN_USER } from "./types";

export const toggleOnlineAction = () => {
  return {
    type: TOGGLE_ONLINE
  };
};

export const logOutUserAction = () => {
  return {
    type: LOGOUT_USER
  };
};

export const logInUserAction = username => {
  return {
    type: LOGIN_USER,
    username
  };
};
