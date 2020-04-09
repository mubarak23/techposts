import * as types from '../actions/actionType';
import initialState from './initialState';
export default function courseReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.CREATE_POST_SUCCESS:
      return [...state, { ...action.post }];
    case types.UPDATE_POST_SUCCESS:
      return state.map((post) =>
        post._id === action.post.id ? action.create : post
      );
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
