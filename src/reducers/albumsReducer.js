import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function albumsReducer(state = initialState.albums, action) {
  switch (action.type) {
    case types.LOADING_ALBUMS:
      return Object.assign({ isFetching: true } ,state);
    case types.LOAD_ALBUMS_SUCCESS:
      return {
        data: action.albums,
        isFetching: false,
      };
    default:
      return state; // initially we return the state by default 
  }
}
