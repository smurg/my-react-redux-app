import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  /* this function is an action creator. */ 
  return { type: types.CREATE_COURSE, course }; // here we return an object with a type property (required)
}

export function loadCoursesSuccess(courses) {
  /* this function is an action creator. */ 
  return { type: types.LOAD_COURSES_SUCCESS, courses }; 
}

export function loadCourses() { // this function will be used to fetch data async
  return function(dispatch) {
    /* it's better to have a separate proxy/service to do the api fetch */ 
    courseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  };
}

