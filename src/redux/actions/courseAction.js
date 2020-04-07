import * as types from './actionType';
import * as courseAPI from '../../services/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseAPI
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadPostsSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadPosts() {
  return function (dispatch) {
    return courseAPI
      .getPosts()
      .then((courses) => {
        dispatch(loadPostsSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
