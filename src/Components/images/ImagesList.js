import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ImagesList = ({ images }) => {
  return (
    <div className='jumbotron col-8'>
      {!images ? 
        <h4 className='display-4'> Select an album to see images </h4>
      :
        <ul className="row">
          {images.map(img =>
            <Image key={img.id} image={img} />
          )}
        </ul>
      }
    </div>
  );
};

ImagesList.propTypes = {
  images: PropTypes.array
}
/*
  propTypes is a data types checking for the props we receive on this component.
  it doesn't actually stop the app from working but puts an error message in the console
*/

export default ImagesList;