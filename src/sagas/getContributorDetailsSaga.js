//redux saga imports
import { call, put, takeLatest } from "redux-saga/effects";
//api
import getContributorDetails from "../api/getContributorDetailsApi";
//constants
import {
  GET_CONTRIBUTOR_DETAILS,
  GET_CONTRIBUTOR_DETAILS_SUCCESS,
  GET_CONTRIBUTOR_DETAILS_FAILURE
} from "../constants/actionTypes";
import {
  GENERIC_ERROR_MESSAGE,
  NO_DATA_MESSAGE,
  EMPTY_STRING
} from "../constants/commonConstants";

//watcher
function* getContributorDetailsSaga() {
  yield takeLatest(GET_CONTRIBUTOR_DETAILS, getContributorDetailsWorker);
}

function* getContributorDetailsWorker(username) {
  try {
    const contributorDetails = yield call(getContributorDetails, username);
    let message = EMPTY_STRING;
    if (!contributorDetails.data.length) {
      message = NO_DATA_MESSAGE;
    }
    yield put({
      type: GET_CONTRIBUTOR_DETAILS_SUCCESS,
      payload: contributorDetails.data[0],
      message: message
    });
  } catch (e) {
    yield put({
      type: GET_CONTRIBUTOR_DETAILS_FAILURE,
      message: GENERIC_ERROR_MESSAGE
    });
  }
}

export default getContributorDetailsSaga;
