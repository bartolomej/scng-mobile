import fetch from 'cross-fetch';
import {host} from '../../app.json';

export const CHANGE_SELECTED_SCHOOL = 'CHANGE_SELECTED_SCHOOL';
export const CHANGE_SELECTED_GROUP = 'CHANGE_SELECTED_GROUP';
export const CHANGE_SELECTED_CLASS = 'CHANGE_SELECTED_CLASS';
export const SET_DEVICE_ID = 'SET_DEVICE_ID';
export const SET_THEME = 'SET_THEME';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const ADD_FEATURE = 'ADD_FEATURE';
export const FETCH_FEATURES_REQUEST = 'FETCH_FEATURES_REQUEST';
export const FETCH_FEATURE_FAILURE = 'FETCH_FEATURE_FAILURE';
export const FETCH_FEATURE_SUCCESS = 'FETCH_FEATURE_SUCCESS';
export const VOTE_FEATURE = 'VOTE_FEATURE';


export const changeSelectedGroup = (value, label) => {
  return { type: CHANGE_SELECTED_GROUP, group: {value, label} }
};

export const changeSelectedSchool = (value, label) => {
  return { type: CHANGE_SELECTED_SCHOOL, school: {value, label} }
};

export const changeSelectedClass = (value, label) => {
  return { type: CHANGE_SELECTED_CLASS, class: {value, label} }
};

export const setDeviceId = (id) => {
  return { type: SET_DEVICE_ID, id }
};

export const setTheme = (theme) => {
  return { type: SET_THEME, theme }
};

export const requestFailed = (error) => {
  return { type: REQUEST_FAILED, error}
};


export const requestFeature = () => {
  return { type: FETCH_FEATURES_REQUEST }
};

export const requestFeatureSuccess = features => {
  return { type: FETCH_FEATURE_SUCCESS, features}
};

export const requestFeatureFailed = error => {
  return { type: FETCH_FEATURE_FAILURE, error}
};


export const fetchFeatures = dispatch => {
  dispatch(requestFeature());
  fetch(`${host}/user/feature`)
    .then(res => res.json())
    .then(json => dispatch(requestFeatureSuccess(json)))
    .catch(error => dispatch(requestFeatureFailed(error)))
};

export const fetchSchools = (dispatch) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}/school`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => dispatch(requestFailed(error)))
  });
};

export const fetchClasses = (dispatch, schoolId) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}/school/${schoolId}`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => dispatch(requestFailed(error)))
  });
};

export const postFeedback = async (type, description, classId) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}/user/feedback`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type, description, classId})})
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  });
};