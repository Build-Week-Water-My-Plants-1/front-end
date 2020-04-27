<<<<<<< HEAD
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    // password: '',
  })
  const handleChanges = event => {
setSignUpData({username: event.target.value})
console.log(signUpData)
  }

  return (
    <form>
      <h4>Let's get started!</h4>
      <h3>Create your account</h3>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' onChange={handleChanges}/>
      <label htmlFor='phonenumber'>Phone Number</label>
      <input id='phonenumber'/>
      <label htmlFor='password'>Password</label>
      <input id='password'/>
      <label htmlFor='confirmpw'>Confirm Password</label>
      <input id='confirmpw'/>
      <button type='submit'>Next</button>
    </form>
  )
}

export default SignUp;
=======
import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/register", this.state.newUser)
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch((err) => console.log({ err }));
  };
};
>>>>>>> d592e1204735b2b8af7873eafd4659ac6b07d73e
