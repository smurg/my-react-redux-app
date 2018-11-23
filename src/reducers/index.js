import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import images, * as fromImages from './imagesReducer';
import albums from './albumsReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  images,
  albums
});

export const selectImagesFromAlbum = (state, albumId) => fromImages.selectFromAlbum(state.images, albumId);

export default rootReducer;


