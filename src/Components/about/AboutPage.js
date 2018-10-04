import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component { 
  render() {
    return (
      <div className='jumbotron'>
        <h1> About </h1>
        <p>This application uses React v16.4, Redux, React Router and a variety of other helpful libraries (like Bootstrap!!).</p>
        <Link to='/' className='btn btn-primary btn-lg'>back</Link>
      </div>
    );
  }
}

export default AboutPage;
