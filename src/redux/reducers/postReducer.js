import * as types from '../actions/actionType';
import initialState from './initialState';
export default function courseReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
