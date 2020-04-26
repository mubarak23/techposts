import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3001/courses/';
const liveURL = 'https://fast-plains-95666.herokuapp.com/api/post/';
//process.env.API_URL + "/courses/";
//const baseUrl = process.env.baseUrl + '/courses/';

export function getPosts() {
  return fetch(liveURL).then(handleResponse).catch(handleError);
}

export function savePost(post) {
  return fetch(liveURL, {
    method: 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function savedPost(post) {
  return fetch(liveURL + (post._id || ''), {
    method: post._id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}

export function getPost(postId) {
  return fetch(liveURL + postId)
    .then(handleResponse)
    .catch(handleError);
}
