import { CHANGE_LANGUAGE } from "./types";

export const changeLanguageAction = language => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  };
};
