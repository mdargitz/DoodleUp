import {combineReducers} from 'redux';
import imageReducer from './imageReducer';
import pointsReducer from './pointsReducer';
import promptReducer from './promptReducer';
import inspirationReducer from './inspirationReducer';

const rootReducer = combineReducers({
  image : imageReducer,
  points: pointsReducer,
  prompt : promptReducer,
  inspiration : inspirationReducer
});

export default rootReducer;