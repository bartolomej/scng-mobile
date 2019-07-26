import fetch from 'cross-fetch';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';


export const requestNews = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  }
};

export const requestNewsFailed = error => {
  return {
    type: FETCH_NEWS_FAILURE,
    error
  }
};

export const requestNewsSuccess = response => {
  return {
    type: FETCH_NEWS_SUCCESS,
    response
  }
};

export const requestNotifications = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  }
};


export const requestNotificationsFailed = error => {
  return {
    type: FETCH_NEWS_FAILURE,
    error
  }
};

export const requestNotificationsSuccess = response => {
  return {
    type: FETCH_NEWS_SUCCESS,
    response
  }
};


export const fetchNews = dispatch => {
  dispatch(requestNews());
  fetch('http://localhost:3000/news')
    .then(res => res.json())
    .then(json => dispatch(requestNewsSuccess(json)))
    .catch(error => dispatch(requestNewsFailed(error)))
};

export const fetchNotifications = dispatch => {
  dispatch(requestNotifications());
  fetch('http://localhost:3000/notifications')
    .then(res => res.json())
    .then(json => dispatch(requestNotificationsSuccess(json)))
    .catch(error => dispatch(requestNotificationsFailed(error)))
};