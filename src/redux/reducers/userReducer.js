import initialState from './initialState';
import * as types from '../actions/actionType';
export const reducer = (state, action) => {
  if (action.type == 'USER') {
    return action.payload;
  }
  if (action.type == 'CLEAR') {
    return null;
  }
  if (action.type == 'UPDATE') {
    return {
      ...state,
      followers: action.payload.followers,
      following: action.payload.following,
    };
  }
  return state;
};

export default function UserReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGNIN:
      return [...state, { ...action.payload }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
