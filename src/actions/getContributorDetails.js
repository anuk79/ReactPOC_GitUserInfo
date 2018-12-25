//constants
import * as actionTypes from "../constants/actionTypes";
//actions
const getContributorDetails = repoName => ({
  type: actionTypes.GET_CONTRIBUTOR_DETAILS,
  repoName: repoName
});

const getContributorDetailsSuccess = payload => ({
  type: actionTypes.GET_CONTRIBUTOR_DETAILS_SUCCESS,
  payload: payload
});

const getContributorDetailsFailure = payload => ({
  type: actionTypes.GET_CONTRIBUTOR_DETAILS_FAILURE,
  payload: payload
});

export {
  getContributorDetails,
  getContributorDetailsSuccess,
  getContributorDetailsFailure
}
