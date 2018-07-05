export const REQUEST_PROMPT = 'REQUEST PROMPT';
export const requestPrompt = () => {
  return {
    type: REQUEST_PROMPT
  };
};

export const PROMPT_SUCCESS = 'PROMPT SUCCESS';
export const promptSuccess = prompt => {
  return {
    type: PROMPT_SUCCESS,
    prompt
  };
};

export const PROMPT_ERROR = 'PROMPT ERROR';
export const promptError = error => {
  return {
    type: PROMPT_ERROR,
    error
  };
};

export const fetchPrompt = () => dispatch => {
  dispatch(requestPrompt());
  fetch('https://ineedaprompt.com/dictionary/default/prompt?q=adj+noun+verb+location')
    .then(result => {
      return result.json();
    })
    .then(result => {
      dispatch(promptSuccess(result.english));
    })
    .catch (error =>{
      dispatch(promptError(error));
    });
};