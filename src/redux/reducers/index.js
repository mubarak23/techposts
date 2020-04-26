import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import post from './singleReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  posts,
  post,
});

export default rootReducer;
