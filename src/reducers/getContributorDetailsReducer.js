//constants
import * as actionTypes from "../constants/actionTypes";
import { EMPTY_STRING } from "../constants/commonConstants";

const getContributorDetailsReducer = (
  state = {
    contributorDetails: {},
    message: EMPTY_STRING
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CONTRIBUTOR_DETAILS:
      return {
        ...state
      };

    case actionTypes.GET_CONTRIBUTOR_DETAILS_SUCCESS:
      return {
        ...state,
        contributorDetails: action.payload,
        message: action.message
      };

    case actionTypes.GET_CONTRIBUTOR_DETAILS_FAILURE:
      return {
        ...state,
        contributorDetails: {},
        message: action.message
      };

    default:
      return state;
  }
};

export default getContributorDetailsReducer;
