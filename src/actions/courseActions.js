import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }; 
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }; 
}

export function loadCoursesSuccess(courses) {
  /* this function is an action creator. */ 
  return { type: types.LOAD_COURSES_SUCCESS, courses }; 
}

export function loadCourses() { // this function will be used to fetch data async
  return function(dispatch) {
    /* it's better to have a separate proxy/service to do the api fetch */ 
    return courseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    // for cases when you wanna access the state we have getState prop also passed to this thunk callback
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}

