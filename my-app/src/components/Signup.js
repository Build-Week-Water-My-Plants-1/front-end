import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
import { connect } from 'react-redux';
import {getID} from '../action/action'
// import './index.css';

const SignUp = (props) => {
    console.log(props.id)
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    phone_number: "",
  });
  const { push } = useHistory();
  const handleChanges = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
    //console.log(signUpData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", signUpData)
      .then((res) => {
        //console.log(res);
        //console.log(props.id)
        console.log(res.data.id);
        props.getID(res.data.id);
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
const mapStateToProps = state => {
    console.log("map:",state[0].id);
    return {
        id:state[0].id,
    }
  }
export default connect(mapStateToProps, {getID})(SignUp)
