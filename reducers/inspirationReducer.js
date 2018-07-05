import { REQUEST_ART, ART_SUCCESS, ART_ERROR } from "../actions/inspiration";

const initialState = {
  art : [],
  loading: false,
  error: null
};

export default function inspirationReducer(state = initialState, action) {
  if (action.type === REQUEST_ART){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === ART_SUCCESS){
    return {
      ...state,
      art: action.data,
      error: null,
      loading: false
    };
  }

  if (action.type === ART_ERROR){
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }
  
  return state;
}