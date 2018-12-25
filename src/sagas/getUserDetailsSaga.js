//redux saga imports
import { call, put, takeLatest } from "redux-saga/effects";
//api
import getUserDetails from "../api/getUserDetailsApi";
//constants
import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE
} from "../constants/actionTypes";

//watcher
function* getUserDetailsSaga() {
  yield takeLatest(GET_USER_DETAILS, getUserDetailsWorker);
}

function* getUserDetailsWorker(username) {
  try {
    const userDetails = yield call(getUserDetails, username);
    yield put({
      type: GET_USER_DETAILS_SUCCESS,
      payload: userDetails.data
    });
  } catch (e) {
    yield put({
      type: GET_USER_DETAILS_FAILURE
    });
  }
}

export default getUserDetailsSaga;
