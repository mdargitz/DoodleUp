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

export const fetchImage = (query) => dispatch => {
  console.log('fetching Image');
  dispatch(requestImage());
  return fetch(`${UNSPLASH_API}&query=${query}`)
    .then(result => {
      console.log(result);
      return result.json();})
    .then(result => {
      console.log(result);
      dispatch(imageSuccess(result.urls.small));
    })
    .catch(error => {
      console.log(error);
      dispatch(imageError(error));});
};