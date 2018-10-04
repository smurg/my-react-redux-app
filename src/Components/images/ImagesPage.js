import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';
import ImagesList from './ImagesList';

const MyLoader = props => (
  <ContentLoader
    height={475}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}>
    <rect x="10" y="394" rx="4" ry="4" width="129" height="16.77" />
    <rect x="0" y="12" rx="5" ry="5" width="372" height="372" />
    <rect x="10" y="419" rx="4" ry="4" width="100" height="13" />
  </ContentLoader>
);
// this component will handle the wrapper of the images page
class ImagesPage extends Component {
  constructor(props) {
    super(props); // <= Class components should always call the base constructor with props.
    this.state = {
      images: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // The componentDidMount() lifecycle method is the best place to fetch data.
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => this.setState({ images: data }));
  }

  render() {
    return (
      <div className='jumbotron'>
        <h1> Images List - image page</h1>
        <p>Here we will display a list of images doing an async fetch to an external api and wait for it results.</p>
        <div className="container-fluid">
          {this.state.isLoading ? (
            <div className='container-fluid col-md-3'>
              <MyLoader />
            </div>
          ) : (
              <ImagesList images={this.state.images} />
          )}
        </div>
      </div>
    );
  }
}

export default ImagesPage;
