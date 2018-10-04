import React from 'react';
import PropTypes from 'prop-types';

/* class ImageList extends Component { 
  render() {
    return (
      <div>
        <h3> Image List!!! </h3>
        <ul className="Projects">
        </ul>
      </div>
    );
  }
} */
const ImagesList = () => (
  <div>
    <h3> Image List!!! </h3>
    <ul className="Projects">
    </ul>
  </div>
)

ImagesList.propTypes = {
  ImageList: PropTypes.array
}
/*
  propTypes is a data types checking for the props we receive on this component.
  it doesn't actually stop the app from working but puts an error message in the console
*/

export default ImagesList;