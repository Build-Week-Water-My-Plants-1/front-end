import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// import './index.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    phonenumber: "",
    password: "",
  });
  const handleChanges = (event) => {
    setSignUpData({ username: event.target.value });
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
    <form>
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
      <label htmlFor="phonenumber">Phone Number</label>
      <input
        id="phonenumber"
        name="phonenumber"
        type="text"
        placeholder="PhoneNumber"
        value={signUpData.phonenumber}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        placeholder="Password"
        value={signUpData.password}
      />
      {/* <label htmlFor='confirmpw'>Confirm Password</label>
      <input id='confirmpw'/> */}
      <button type="submit">Next</button>
    </form>
  );
};

export default SignUp;
