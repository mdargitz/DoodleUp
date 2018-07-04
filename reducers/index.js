import {combineReducers} from 'redux';
import imageReducer from './imageReducer';
import pointsReducer from './pointsReducer';
import promptReducer from './promptReducer';

const rootReducer = combineReducers({
  image : imageReducer,
  points: pointsReducer,
  prompt : promptReducer
});

export default rootReducer;