import * as types from './actionTypes';
import ImageApi from '../api/ImageService';

function loadImagesSuccess(imgs) {
  return { type: types.LOAD_IMAGES_SUCCESS, images: imgs }; 
};

function loadingImages() {
  return { type: types.LOADING_IMAGES };
}

function loadingAlbums() {
  return { type: types.LOADING_ALBUMS };
}

function loadAlbumsSuccess(albums) {
  return { type: types.LOAD_ALBUMS_SUCCESS, albums }; 
}

export function loadImages() { // this function will be used to fetch data async
  return (dispatch) => {
    dispatch(loadingImages());
    return ImageApi.getAllImages().then(images => {
      const imagesByAlbum = ImageApi.getAllImagesByAlbums(images);
      dispatch(loadImagesSuccess(imagesByAlbum));
    }).catch(error => {
      throw(error);
    })
  };
};

export function loadAlbums() { 
  return (dispatch) => {
    dispatch(loadingAlbums());
    return ImageApi.getAllAlbums().then(albums => {
      dispatch(loadAlbumsSuccess(albums));
    }).catch(error => {
      throw(error);
    })
  };
};