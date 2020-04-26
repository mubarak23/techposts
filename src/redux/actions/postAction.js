import * as types from './actionType';
import * as postAPI from '../../services/postApi';
//import * as courseAPI from '../../services/courseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function updateCourseSuccess(posts) {
  return { type: types.UPDATE_POST_SUCCESS, posts };
}

export function createCourseSuccess(posts) {
  return { type: types.CREATE_POST_SUCCESS, posts };
}

export function loadPostSuccess(post) {
  return { type: types.LOAD_SINGLE_POST_SUCCESS, post };
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

export function savePost(post) {
  return function (dispatch, getState) {
    return postAPI
      .savePost(post)
      .then((post) => {
        post.id
          ? dispatch(updateCourseSuccess(post))
          : dispatch(createCourseSuccess);
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getPost(id) {
  return function (dispatch) {
    return postAPI
      .getPost(id)
      .then((post) => {
        dispatch(loadPostSuccess(post));
        console.log(post);
      })
      .catch((error) => {
        throw error;
      });
  };
}
