const {CHANGE_SELECTED_CLASS, CHANGE_SELECTED_SCHOOL} = require('../actions');


const initialState = {
  error: null,
  isFirstTime: true,
  selectedClass: null,
  selectedSchool: null
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
    default: return state;
  }
}