import * as actionTypes from "./actionTypes";

export const initialState = {
  isDarkMode: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_DARK_MODE:
      return { ...state, isDarkMode: action.payload };
    default:
      return state;
  }
};

export default Reducer;
