//constants
import * as actionTypes from "../constants/actionTypes";

const getUserDetailsReducer = (
  state = {
    userDetails: {}
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_USER_DETAILS:
      return {
        ...state
      };
    case actionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload
      };
    case actionTypes.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        userDetails: {}
      };
    default:
      return state;
  }
};

export default getUserDetailsReducer;
