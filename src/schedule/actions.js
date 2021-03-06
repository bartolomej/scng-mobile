import fetch from 'cross-fetch';
import {host} from '../../app.json';

export const FETCH_SCHEDULE_REQUEST = 'FETCH_SCHEDULE_REQUEST';
export const FETCH_SCHEDULE_FAILURE = 'FETCH_SCHEDULE_FAILURE';
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS';


export const requestSchedule = () => {
  return {
    type: FETCH_SCHEDULE_REQUEST,
  }
};

export const requestScheduleFailed = error => {
  return {
    type: FETCH_SCHEDULE_FAILURE,
    error
  }
};

export const requestScheduleSuccess = response => {
  return {
    type: FETCH_SCHEDULE_SUCCESS,
    response
  }
};


export const fetchSchedule = (dispatch, classId, weekPeriod) => {
  dispatch(requestSchedule());
  // fetches schedule for 3 weeks in advance
  fetch(`${host}/schedule/${classId}?period=${weekPeriod}`)
    .then(res => res.json())
    .then(json => dispatch(requestScheduleSuccess(json)))
    .catch(error => dispatch(requestScheduleFailed(error)))
};