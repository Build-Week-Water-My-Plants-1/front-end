import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
// import './index.css';

const Nav = styled.nav`
  background-color: #235b2d;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  justify-content: space-between;
`;

const LinksDiv = styled.div`
display: flex;
`;

const SignUpDiv = styled.div`
display: flex;
`;

const Header = () => {
  return (
    <Nav>
      <LinksDiv>
        <h1>Plant2o</h1>
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
      </LinksDiv>
      <SignUpDiv>
        <button id="signup">Sign Up</button>
        <button id="login">Log In</button>
      </SignUpDiv>
    </Nav>
  );
};

export default Header;
