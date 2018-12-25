//redux saga imports
import { put, takeLatest } from "redux-saga/effects";
//constants
import {
  SEARCH_REPOS,
  SEARCH_REPOS_SUCCESS,
  SEARCH_REPOS_FAILURE
} from "../constants/actionTypes";
import {
  EMPTY_STRING,
  NO_RESULTS_MESSAGE,
  GENERIC_ERROR_MESSAGE
} from "../constants/commonConstants";

//watcher
function* searchRepoSaga() {
  yield takeLatest(SEARCH_REPOS, searchReposWorker);
}

function* searchReposWorker({ searchQuery, payload }) {
  try {
    const filterdData = payload.filter(val => {
      return val.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
    });
    let message = EMPTY_STRING;
    if (!filterdData.length) {
      message = NO_RESULTS_MESSAGE;
    }

    yield put({
      type: SEARCH_REPOS_SUCCESS,
      message: message,
      payload: filterdData
    });
  } catch (err) {
    yield put({
      type: SEARCH_REPOS_FAILURE,
      message: GENERIC_ERROR_MESSAGE,
      payload: []
    });
  }
}

export default searchRepoSaga;
