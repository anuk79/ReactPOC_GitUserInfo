//redux imports
import { combineReducers } from "redux";
//reducers
import getRepoReducer from "./getRepoReducer";
import getUserDetailsReducer from "./getUserDetailsReducer";
import getContributorDetailsReducer from "./getContributorDetailsReducer";

const rootReducer = combineReducers({
  getRepoReducer,
  getUserDetailsReducer,
  getContributorDetailsReducer
});

export default rootReducer;
