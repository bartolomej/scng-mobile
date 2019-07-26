import fetch from 'cross-fetch';

export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';


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


export const fetchNotifications = dispatch => {
  dispatch(requestNotifications());
  fetch('http://localhost:3000/notifications')
    .then(res => res.json())
    .then(json => dispatch(requestNotificationsSuccess(json)))
    .catch(error => dispatch(requestNotificationsFailed(error)))
};