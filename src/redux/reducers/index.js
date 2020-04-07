import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  posts,
});

export default rootReducer;
