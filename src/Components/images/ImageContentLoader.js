import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageContentLoader = props => (
  <div className='container-fluid col-md-3'>
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
  </div>
);

export default ImageContentLoader;