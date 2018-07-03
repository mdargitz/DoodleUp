import { INCREMENT_EXPERIENCE } from "../actions/points";

const intialState = {
  experience: 0,
  level: 0
};

export default function pointsReducer(state = intialState, action){
  if (action.type === INCREMENT_EXPERIENCE){

    return {
      experience : state.experience + action.amount,
    };
  }
  return state;
}