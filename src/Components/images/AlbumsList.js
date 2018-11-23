import React from 'react';
import PropTypes from 'prop-types';
import AlbumsLink from './AlbumLink';

const AlbumsList = ({ albums, matchedUrl }) => {
  return (
    <div className="list-group col-4">
      {albums.map(album => 
        <AlbumsLink key={album.id} albumId={album.id} albumTitle={album.title} matchedUrl={matchedUrl} />
      )}
    </div>
  )
};

/*
  matchedUrl is not needed here, we are just by-passing it.
  is there another way to do this, to keep this component not aware about that prop?
  maybe Context???
*/

AlbumsList.propTypes = {
  albums: PropTypes.array,
  matchedUrl: PropTypes.string
};

export default AlbumsList;
