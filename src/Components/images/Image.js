import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => {
  const { title, thumbnailUrl } = image;
  return (
    <div className="card col-6">
      <img className="card-img-top" src={thumbnailUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object
}

export default Image;
