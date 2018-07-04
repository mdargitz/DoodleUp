import {UNSPLASH_API} from '../config';

export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const requestImage = () => {
  return {
    type : REQUEST_IMAGE
  };
};

export const IMAGE_SUCCESS = 'IMAGE_SUCCESS';
export const imageSuccess = (url) => {
  return {
    type: IMAGE_SUCCESS,
    url
  };
};

export const IMAGE_ERROR = 'IMAGE_ERROR';
export const imageError = (error) => {
  return {
    type: IMAGE_ERROR,
    error
  };
};

export const fetchImage = (collection) => dispatch => {
  dispatch(requestImage());
  return fetch(`${UNSPLASH_API}&collections=${collection}`)
    .then(result => {
      return result.json();})
    .then(result => {
      dispatch(imageSuccess(result.urls.small));
    })
    .catch(error => {
      dispatch(imageError(error));});
};