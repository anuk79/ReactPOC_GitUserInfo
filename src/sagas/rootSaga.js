//redux-saga imports
import { all, fork } from "redux-saga/effects";
//sagas
import { getReposSaga } from "./getRepoSaga";
import { getUserDetailsSaga } from "./getUserDetailsSaga";
import { searchRepoSaga } from "./searchRepoSaga";

export default function*() {
  yield all([getReposSaga, getUserDetailsSaga, searchRepoSaga].map[fork]);
}