import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function imagesReducer(state = initialState.images, action) {
  switch (action.type) {
    case types.LOADING_IMAGES:
      return Object.assign({ isFetching: true } ,state);
    case types.LOAD_IMAGES_SUCCESS:
      return {
        data: action.images,
        isFetching: false,
      }; // we need to replace whats in our state with what we get from API
    default:
      return state;
  }
}
/*
  Reducers are in charge of writing the state to a specific shape. 
  Therefore, it’s a good idea to have something as close as possible 
  to them to handle the reading part. That’s where selectors come into play.

  selectors are just convenient functions used for looking up and retrieving
  snippets of data from the Redux store, into your components. 
*/
export const selectFromAlbum = (imagesState, albumId) => {
  return imagesState.data[albumId]; 
}