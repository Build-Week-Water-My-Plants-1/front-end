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
  align-items: center;
`;

const LinksDiv = styled.div`
display: flex;
justify-content: space-around;
  align-items: center;
  margin-left: 10%;
`;

const SignUpDiv = styled.div`
display: flex;
`;



const Button = styled.button`
  background-color: transparent;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-size: .8rem;
  border: none;
`;

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
margin-left: 30%;
`;

const Header = () => {
  return (
    <Nav>
      <LinksDiv>
        <h1>Plant2o</h1>
        <StyledLink to="/" className="nav-link">Home</StyledLink>
        <StyledLink to="#" className="nav-link">About</StyledLink>
      </LinksDiv>
      <SignUpDiv>
        <Button id="signup">Sign Up</Button>
        <Button id="login">Log In</Button>
      </SignUpDiv>
    </Nav>
  );
};

export default Header;
