import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component { 
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My React App</a>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to='/images' className='nav-link' activeClassName='active'>Images</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
          </li>
        </ul> 
      </nav>
    );
  }
}

export default Navbar;

