import fetch from 'cross-fetch';
import {host} from '../../app.json';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';


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


export const fetchNews = dispatch => {
  dispatch(requestNews());
  fetch(`${host}/news`)
    .then(res => res.json())
    .then(json => dispatch(requestNewsSuccess(json)))
    .catch(error => dispatch(requestNewsFailed(error)))
};