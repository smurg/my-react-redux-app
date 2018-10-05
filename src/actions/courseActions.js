import * as types from './actionTypes';

export function createCourse(course) {
  /* this function is an action creator. */ 
  return { type: types.CREATE_COURSE, course }; // here we return an object with a type property (required)
}