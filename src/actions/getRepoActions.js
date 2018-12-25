//constants
import * as actionTypes from "../constants/actionTypes";
//actions
const getRepos = () => ({
  type: actionTypes.GET_REPOS
});

const getReposSuccess = payload => ({
  type: actionTypes.GET_REPOS_SUCCESS,
  payload
});

const getReposFailure = payload => ({
  type: actionTypes.GET_REPOS_FAILURE,
  payload
});

const searchRepos = (query, payload) => ({
  type: actionTypes.SEARCH_REPOS,
  searchQuery: query,
  payload
});

const searchReposSuccess = (query, payload) => ({
  type: actionTypes.SEARCH_REPOS_SUCCESS,
  payload
});

const searchReposFailure = (query, payload) => ({
  type: actionTypes.SEARCH_REPOS_FAILURE,
  payload
});

export {
  getRepos,
  getReposSuccess,
  getReposFailure,
  searchRepos,
  searchReposSuccess,
  searchReposFailure
};
