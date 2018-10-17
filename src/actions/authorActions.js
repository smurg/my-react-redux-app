import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  /* this function is an action creator. */ 
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }; 
}

export function loadAuthors() { // this function will be used to fetch data async
  return (dispatch) => {
    /* it's better to have a separate proxy/service to do the api fetch */ 
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    })
  };
}

