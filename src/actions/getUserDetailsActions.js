//constants
import * as actionTypes from "../constants/actionTypes";
//actions
const getUserDetails = userName => ({
  type: actionTypes.GET_USER_DETAILS,
  userName
});

const getUserDetailsSuccess = payload => ({
  type: actionTypes.GET_USER_DETAILS_SUCCESS,
  payload
});

const getUserDetailsFailure = payload => ({
  type: actionTypes.GET_USER_DETAILS_FAILURE,
  payload
});

export {
    getUserDetails,
    getUserDetailsSuccess,
    getUserDetailsFailure
}
