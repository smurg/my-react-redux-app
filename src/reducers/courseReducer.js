import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  // this reducer is only handling an array of courses. The state is a specific slice of the whole store.
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
    /* remember in Redux, state is inmutable. */
      return [
        ...state, 
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
    /* When update, we need to remove the previous course we have on the state, and put the new one.
      -> We do that by filtering all the courses but the updated one. */
      return [
        ...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses; // we need to replace whats in our state with what we get from API
    default: // initially redux will call this without action.type -> load initial state
      return state;
  }
}
