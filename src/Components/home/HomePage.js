import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component { 
  /* this component could be a stateless component (function) */
  render() {
    return (
      <div className='jumbotron bg-light'>
        <h1> Images administration - home page</h1>
        <p>React, Redux, and React Router in ES6 for ultra responsive web apps.</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
      </div>
    );
  }
}

export default HomePage;

