import * as types from './actionType';
import * as postAPI from '../../services/postApi';
import * as courseAPI from '../../services/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function (dispatch) {
    return postAPI
      .getPosts()
      .then((posts) => {
        dispatch(loadPostsSuccess(posts));
        console.log(posts);
      })
      .catch((error) => {
        throw error;
      });
  };
}
