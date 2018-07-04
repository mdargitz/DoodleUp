import { REQUEST_PROMPT, PROMPT_SUCCESS, PROMPT_ERROR } from "../actions/prompts";

const initialState = {
  prompt: '',
  loading: false,
  error: null
};

export default function promptReducer(state = initialState, action){
  if (action.type === REQUEST_PROMPT){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === PROMPT_SUCCESS){
    return {
      ...state,
      prompt: action.prompt,
      loading: false,
      error: null
    };
  }

  if (action.type === PROMPT_ERROR){
    return {
      ...state,
      loading: false,
      error : action.error
    };
  }
  
  return state;
}