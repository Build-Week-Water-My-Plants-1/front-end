import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ReactDOM from "react-dom";
import styled from "styled-components";

// import './index.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    phone_number: "",
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
    <form onSubmit={handleSubmit}>
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
        placeholder="PhoneNumber"
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
      <button type="submit">Next</button>
    </form>
  );
};

export default SignUp;
