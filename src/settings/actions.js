import fetch from 'cross-fetch';
import {host} from '../../app.json';

export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const CHANGE_SELECTED_SCHOOL = 'CHANGE_SELECTED_SCHOOL';
export const CHANGE_SELECTED_CLASS = 'CHANGE_SELECTED_CLASS';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';


export const requestNotifications = () => {
  return {
    type: FETCH_NOTIFICATIONS_REQUEST,
  }
};

export const requestNotificationsFailed = error => {
  return {
    type: FETCH_NOTIFICATIONS_FAILURE,
    error
  }
};

export const requestNotificationsSuccess = response => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    response
  }
};


export const changeSelectedSchool = school => {
  return {
    type: CHANGE_SELECTED_SCHOOL,
    school
  }
};

export const changeSelectedClass = schoolClass => {
  return {
    type: CHANGE_SELECTED_CLASS,
    class: schoolClass
  }
};

export const requestStart = () => {
  return {
    type: REQUEST_START
  }
};

export const requestFailed = (error) => {
  return {
    type: REQUEST_FAILED,
    error
  }
};

export const requestSuccess = () => {
  return {
    type: REQUEST_SUCCESS
  }
};


export const fetchNotifications = dispatch => {
  dispatch(requestNotifications());
  fetch(`${host}/notifications`)
    .then(res => res.json())
    .then(json => dispatch(requestNotificationsSuccess(json)))
    .catch(error => dispatch(requestNotificationsFailed(error)))
};

export const fetchSchools = (dispatch) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}/schedule`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => dispatch(requestFailed(error)))
  });
};

export const fetchClasses = (dispatch, schoolId) => {
  return new Promise((resolve, reject) => {
    fetch(`${host}/schedule/${schoolId}`)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(error => dispatch(requestFailed(error)))
  });
};