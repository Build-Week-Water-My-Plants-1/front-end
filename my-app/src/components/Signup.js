import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// import './index.css';

/////////////Styling/////////////////
const WrapperDiv = styled.div`
  width: 30%;
  height: 70%;
  background-color: #F1F3F2;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Button = styled.button`
background-color: #235B2D;
color: white;
`;

//////////SignUp function//////////////

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    phone_number: "",
    password: "",
  });
  const handleChanges = (event) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
    console.log(signUpData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/register", this.state.signUpData)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <WrapperDiv>
      <Form onSubmit={handleSubmit}>
        <h4>Let's get started!</h4>
        <h3>Create your account</h3>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={signUpData.username}
          onChange={handleChanges}
        />
        <label htmlFor="phone_number">Phone Number</label>
        <input
          id="phone_number"
          name="phone_number"
          type="text"
          placeholder="Phone Number"
          value={signUpData.phone_number}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleChanges}
        />
        {/* <label htmlFor='confirmpw'>Confirm Password</label>
      <input id='confirmpw'/> */}
        <Button type="submit">Next</Button>
      </Form>
    </WrapperDiv>
  );
};

export default SignUp;
