import {SET_DEVICE_ID, SET_THEME} from "../actions";

const {CHANGE_SELECTED_CLASS, CHANGE_SELECTED_SCHOOL, REQUEST_START, REQUEST_FAILED, REQUEST_SUCCESS} = require('../actions');


const initialState = {
  error: null,
  isLoading: false,
  isFirstTime: true,
  selectedClass: null,
  selectedSchool: null,
  deviceId: null,
  theme: 'dark'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_CLASS:
      return {
        ...state,
        selectedClass: action.class
      };
    case CHANGE_SELECTED_SCHOOL:
      return {
        ...state,
        selectedSchool: action.school
      };
    case REQUEST_START:
      return {
        ...state,
        isLoading: true
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case SET_DEVICE_ID:
      return {
        ...state,
        deviceId: action.deviceId
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default: return state;
  }
}