import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE} from "../actions";

const initialState = {
  error: null,
  isLoading: false,
  articles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        articles: action.response
      };
    default: return state;
  }
}