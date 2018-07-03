import {combineReducers} from 'redux';
import imageReducer from './imageReducer';
import pointsReducer from './pointsReducer';

const rootReducer = combineReducers({
  image : imageReducer,
  points: pointsReducer
});

export default rootReducer;