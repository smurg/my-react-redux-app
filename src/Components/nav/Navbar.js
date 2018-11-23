import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => { 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to='/' className='navbar-brand' activeClassName='active'>My React App</NavLink>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/albums' className='nav-link' activeClassName='active'>Albums of Images</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/courses' className='nav-link' activeClassName='active'>Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
        </li>
      </ul> 
    </nav>
  );
};

export default Navbar;

