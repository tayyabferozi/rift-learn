import * as actionTypes from "./actionTypes";

export const changeIsDarkMode = (payload) => {
  return { type: actionTypes.SET_IS_DARK_MODE, payload };
};
