import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
// import './index.css';



const Header = () => {

  return (
    <nav>
      <h1>Plant Parenthood</h1>
      <Link to='https://angry-goodall-235971.netlify.app/index.html#'>Home</Link>
      <Link to='https://angry-goodall-235971.netlify.app/about.html'>About</Link>
      <button><Link to = 'https://planth2o.now.sh/signup'>Sign Up</Link></button>
      <button><Link to = 'https://planth2o.now.sh/login'>Log In</Link></button>

    </nav>
  )
}

export default Header;