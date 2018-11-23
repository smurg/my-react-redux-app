import React, { Component } from 'react';
import ImagesList from './ImagesList';
import ImageContentLoader from './ImageContentLoader';
import { connect } from 'react-redux';
import { selectImagesFromAlbum } from '../../reducers';
import { loadImages } from '../../actions/ImageActions';

// this component will handle the wrapper of the images page
class ImagesContainer extends Component {

  componentDidMount() {
    // here we need to fetch images if they don't exist
    const { loadImages, images } = this.props;
    if (!images) {
      loadImages();  
    }
  }

  render() {
    const { isFetching, images } = this.props;
    return (
      isFetching || isFetching === undefined ? 
        <ImageContentLoader />
      :
        <ImagesList images={images} />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const albumId = ownProps.match.params.id; // from the path `/albums/:id`
  const emptyImages = !state.images.data;
  let images = null;
  if (albumId && !emptyImages) {
    images = selectImagesFromAlbum(state, parseInt(albumId));
  }
  debugger;
  const isFetching = state.images.isFetching;
  return {
    isFetching,
    images: images
  };
};

const mapDispatchToProps = { loadImages };

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);
