import { INCREMENT_EXPERIENCE, INCREMENT_LEVEL } from '../actions/points';

const intialState = {
  experience: 0,
  level: 0
};

export default function pointsReducer(state = intialState, action){
  if (action.type === INCREMENT_EXPERIENCE){
    return {
      ...state,
      experience : state.experience + action.amount,
    };
  }

  if (action.type === INCREMENT_LEVEL){
    if (state.level >= action.level){
      return state;
    }
    return {
      ...state,
      level : action.level
    };
  }
  return state;
}