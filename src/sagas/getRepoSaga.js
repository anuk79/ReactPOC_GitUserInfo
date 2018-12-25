//redux saga imports
import { call, put, takeLatest } from "redux-saga/effects";
//api
import getRepos from "../api/getRepoApi";
//constants
import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAILURE
} from "../constants/actionTypes";
import { GENERIC_ERROR_MESSAGE } from "../constants/commonConstants";

//watcher
function* getReposSaga() {
  yield takeLatest(GET_REPOS, getReposWorker);
}

function* getReposWorker() {
  try {
    const repos = yield call(getRepos);
    yield put({ type: GET_REPOS_SUCCESS, payload: repos.data });
  } catch (e) {
    yield put({ type: GET_REPOS_FAILURE, message: GENERIC_ERROR_MESSAGE });
  }
}

export default getReposSaga;
