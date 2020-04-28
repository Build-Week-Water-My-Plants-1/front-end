import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = (props) => {
  const [logInData, setLogInData] = useState({ username: "", password: "" });

  const handleChanges = (event) => {
    setLogInData({ username: event.target.value });
    console.log(logInData);
  };

  const onSubmit = () => {
    axiosWithAuth()
      .post("/api/auth/login", logInData)
      .then((res) => {
        // console.log('logging in', res)
        window.localStorage.setItem("token", res.data.token);
        setLogInData({ username: "", password: "" });
        props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
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

export default LoginForm;
