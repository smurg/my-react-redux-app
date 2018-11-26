import React from 'react';
import PropTypes from 'prop-types';

// we can also generalize the size of the list with col-4 get from props
// this is just a list of elements:
const List = ({ children }) => {
  return (
    <div className="list-group col-4">
      {children}
    </div>
  )
};

/*
  SOLVED and REFACTORED! before we have:
  AlbumsList = ({ albums, matchedUrl }) => {
  return (
    <div className="list-group col-4">
      {albums.map(album => 
        <AlbumsLink key={album.id} albumId={album.id} albumTitle={album.title} matchedUrl={matchedUrl} />
      )}
    </div>
  )}
  matchedUrl was not needed here, we are just by-passing it.
  is there another way to do this, to keep this component not aware about that prop?
   Yes! component composition
*/

List.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default List;
