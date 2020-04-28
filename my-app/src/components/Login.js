import React, { useState } from "react";
import ReactDOM from "react-dom";
// import './index.css';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const LogIn = () => {
  const [logInData, setLogInData] = useState({
    username: "",
    // password: '',
  });
  const handleChanges = (event) => {
    setLogInData({ username: event.target.value });
    console.log(logInData);
  };

  return (
    <form>
      <h4>Welcome back!</h4>
      <h3>Log into your account</h3>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={handleChanges} />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" />
      <button type="submit">Next</button>
    </form>
  );
};

export default LogIn;
