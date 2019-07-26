import {FETCH_NOTIFICATIONS_REQUEST, FETCH_NOTIFICATIONS_FAILURE, FETCH_NOTIFICATIONS_SUCCESS} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        notifications: action.response
      };
    default: return state;
  }
}