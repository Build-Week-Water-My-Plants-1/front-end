import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import './index.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });
  const { push } = useHistory();

  const handleChanges = (event) => {
    setSignUpData({ username: event.target.value });
    console.log("signUpData", signUpData);
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
      <input id="username" type="text" onChange={handleChanges} />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input id="phoneNumber" />
      <label htmlFor="password">Password</label>
      <input id="password" />
      {/* <label htmlFor="confirmpw">Confirm Password</label>
      <input id="confirmpw" /> */}
      <button type="submit">Next</button>
    </form>
  );
};

export default SignUp;
