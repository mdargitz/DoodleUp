import { IMAGE_ERROR, REQUEST_IMAGE, IMAGE_SUCCESS } from '../actions/training';


const initialState = {
  url: null,
  loading: false,
  error : null
};

function imageReducer(state = initialState, action) {
  if (action.type === REQUEST_IMAGE) {
    return {
      ...state,
      loading : true 
    };
  }

  else if (action.type === IMAGE_SUCCESS){
    return {
      url : action.url,
      loading: false,
      error: null
    };
  }

  else if (action.type === IMAGE_ERROR){
    return {
      ...state,
      loading: false,
      error : action.error
    };
  }
  return state;
}

export default imageReducer;