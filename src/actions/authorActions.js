import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function createCourse(course) {
  /* this function is an action creator. */ 
  return { type: types.CREATE_COURSE, course }; // here we return an object with a type property (required)
}

export function loadCoursesSuccess(courses) {
  /* this function is an action creator. */ 
  return { type: types.LOAD_COURSES_SUCCESS, courses }; 
}

export function loadAuthors() { // this function will be used to fetch data async
  return (dispatch) => {
    /* it's better to have a separate proxy/service to do the api fetch */ 
    AuthorApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  };
}

