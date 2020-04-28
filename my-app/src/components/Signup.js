import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ReactDOM from "react-dom";
import styled from "styled-components";

// import './index.css';

/////////////Styling/////////////////
const WrapperDiv = styled.div`
  width: 20%;
  height: 80%;
  padding: 2% 5% 5% 5%;
  background-color: #F1F3F2;
  background: rgba(0.75);
  display: flex;
  flex-direction: column;
  font-family: 'Nunito Sans', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const H4 = styled.h4`
font-family: 'Nunito Sans', sans-serif;
font-weight: 400;
margin: 0 0 10% 0;
`;

const Label = styled.label`
text-align: left;
font-weight: 300;
font-size: .8rem;
padding-top: 5%;
`;

const Button = styled.button`
height: 2rem;
font-size: .9rem;
background-color: #235B2D;
color: white;
border-radius: 4px;
margin-top: 15%;
`;

//////////SignUp function//////////////

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    phone_number: "",
    password: "",
  });

  const { push } = useHistory();
  const handleChanges = (event) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
    console.log(signUpData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", signUpData)
      .then((res) => {
        console.log("sign up:", res);
        push("/login");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <WrapperDiv>
      <Form onSubmit={handleSubmit}>
        <h4>Let's get started!</h4>
        
        <H4>Create your account</H4>
    
        
        <Label htmlFor="username">Username</Label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={signUpData.username}
          onChange={handleChanges}
        />
        <Label htmlFor="phone_number">Phone Number</Label>
        <input
          id="phone_number"
          name="phone_number"
          type="text"
          placeholder="Phone Number"
          value={signUpData.phone_number}
          onChange={handleChanges}
        />
        <Label htmlFor="password">Password</Label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleChanges}
        />
        {/* <Label htmlFor='confirmpw'>Confirm Password</Label>
    <form onSubmit={handleSubmit}>
      <h4>Let's get started!</h4>
      <h3>Create your account</h3>
      <Label htmlFor="username">Username</Label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        value={signUpData.username}
        onChange={handleChanges}
      />
      <Label htmlFor="phone_number">Phone Number</Label>
      <input
        id="phone_number"
        name="phone_number"
        type="text"
        placeholder="PhoneNumber"
        value={signUpData.phone_number}
        onChange={handleChanges}
      />
      <Label htmlFor="password">Password</Label>
      <input
        id="password"
        name="password"
        type="text"
        placeholder="Password"
        value={signUpData.password}
        onChange={handleChanges}
      />
      {/* <Label htmlFor='confirmpw'>Confirm Password</Label>
      <input id='confirmpw'/> */}
        <Button type="submit">Next</Button>
      </Form>
    </WrapperDiv>
  );
};

export default SignUp;
