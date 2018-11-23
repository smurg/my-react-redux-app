import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const AlbumsLink = ({ albumId, albumTitle, qtyPhotos = null, matchedUrl }) => {
  return (
    <NavLink
    to={`${matchedUrl}/${albumId}`}
    activeClassName='active'
    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
      {albumTitle}
      <span className="badge badge-primary badge-light">{qtyPhotos ? qtyPhotos : 0}</span>
    </NavLink>
  )
};

AlbumsLink.propTypes = {
  albumId: PropTypes.number,
  albumTitle: PropTypes.string,
  matchedUrl: PropTypes.string
};

export default AlbumsLink;
