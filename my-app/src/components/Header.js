import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

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
  margin-left: 7%;
`;

const SignUpDiv = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  border: none;
  margin-right: 40px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 30%;
`;

const Header = () => {
  return (
    <Nav>
      <LinksDiv>
        <h1>Oxygen</h1>
        <StyledLink
          href="https://plantlove.netlify.app/"
          target="_blank"
          className="nav-link home"
        >
          Home
        </StyledLink>
       <StyledLink
       href="https://plantlove.netlify.app/about.html"
       target="_blank"
       className="nav-link about"
       >
         About
       </StyledLink>
      </LinksDiv>
      <SignUpDiv>
        <Button id="signup">
          <Link className="sign-btn" to="/">
            Sign Up
          </Link>
        </Button>
        <Button id="login">
          <Link className="login-btn" to="/login">
            Log In
          </Link>
        </Button>
      </SignUpDiv>
    </Nav>
  );
};

export default Header;
