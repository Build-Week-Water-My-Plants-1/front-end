import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
// import './index.css';



const Header = () => {

  return (
    <nav>
      <h1>Plant Parenthood</h1>
      <Link to='/'>Home</Link>
      <Link to='/login'>About</Link>
      <button id='signup'>Sign Up</button>
      <button id='login'>Log In</button>

    </nav>
  )
}

export default Header;