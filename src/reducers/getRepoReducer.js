//constants
import * as actionTypes from '../constants/actionTypes';
import { EMPTY_STRING } from '../constants/commonConstants';

const initialState = {
    userData: [],
    filteredData: [],
    isLoading: true,
    message: EMPTY_STRING,
    searchQuery: EMPTY_STRING
};
//airbnb eslint
const getRepoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_REPOS:
            return {
                ...state,
                isLoading: true,
                message: EMPTY_STRING
            }

        case actionTypes.GET_REPOS_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                filteredData: action.payload,
                isLoading: false
            }

        case actionTypes.GET_REPOS_FAILURE:
            return {
                ...state,
                userData: action.payload,
                filteredData: action.payload,
                isLoading: false,
                message: action.message
            }
            
        case actionTypes.SEARCH_REPOS:
            return {
                ...state,
                userData: action.payload,
                searchQuery: action.searchQuery
            }

        case actionTypes.SEARCH_REPOS_SUCCESS:
            return {
                ...state,
                filteredData: action.payload,
                message: action.message
            }

        case actionTypes.SEARCH_REPOS_FAILURE:
            return {
                ...state,
                filteredData: action.payload,
                message: action.message
            }

        default:
            return state
    }
}

export default getRepoReducer;