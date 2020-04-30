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
  margin-left: 10%;
`;

const SignUpDiv = styled.div`
  display: flex;
`;



export const Button = styled.button`
  background-color: transparent;
  color: white;
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.8rem;
  border: none;
  margin-right: 20px;
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
        <a
          href="https://angry-goodall-235971.netlify.app/"
          className="nav-link home"
        >
          Home
        </a>
        <StyledLink to="#" className="nav-link">
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