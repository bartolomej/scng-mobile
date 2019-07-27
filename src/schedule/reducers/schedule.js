import { FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_FAILURE, FETCH_SCHEDULE_SUCCESS} from "../actions";

const initialState = {
  error: null,
  isLoading: false,
  schedule: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SCHEDULE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        schedule: action.response
      };
    default: return state;
  }
}