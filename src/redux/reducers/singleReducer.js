import * as types from '../actions/actionType';
import initialState from './initialState';
export default function singleReducer(state = initialState.post, action) {
  switch (action.type) {
    case types.LOAD_SINGLE_POST_SUCCESS:
      return action.post;
    default:
      return state;
  }
}
