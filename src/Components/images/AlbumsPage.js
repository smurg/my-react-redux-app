import React, { Component } from 'react';
import ImageContentLoader from './ImageContentLoader';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadAlbums } from '../../actions/ImageActions';
import List from '../common/List';
import ImagesContainer from './ImagesContainer';

// this component will handle the wrapper of the images page
class AlbumsPage extends Component {

  componentDidMount() {
    // The componentDidMount() lifecycle method is the best place to fetch data.
    // here we need to fetch albums and images if they don't exist
    const { loadAlbums } = this.props;
    loadAlbums();
  }

  render() {
    const { isFetching, albums } = this.props;
    const matchedUrl = this.props.match.path;
    return (
      <div className='jumbotron bg-light'>
        <h1> List of Albums </h1>
        <p>Here we will display a list of images doing an async fetch to an external api and wait for it results.</p>
        <div className="row">
          {isFetching || isFetching === undefined ? (
            <ImageContentLoader />
          ) : (
            <React.Fragment>
              <List>
                {albums.map(album => 
                  <AlbumsLink key={album.id} albumId={album.id} albumTitle={album.title} matchedUrl={matchedUrl} />
                )}
              </List>
              <Route path='/albums/' component={ImagesContainer} exact></Route>
              <Route path='/albums/:id' component={ImagesContainer}></Route>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { albums } = state;
  const isFetching = albums.isFetching;
  return {
    isFetching,
    albums: albums.data
  };
};

const mapDispatchToProps = { loadAlbums };

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
