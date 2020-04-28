import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const [logInData, setLogInData] = useState({ username: "", password: "" });

//   const { push } = useHistory();

  const handleChanges = (event) => {
    event.preventDefault();
    setLogInData({ ...logInData, [event.target.name]: event.target.value });
    console.log(logInData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", logInData)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        setLogInData({ username: "", password: "" });
        this.props.push("/add");
        // push('/add')
      })
      .catch((err) => console.log(err,logInData));
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Welcome back!</h4>
      <h3>Log into your account</h3>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        value={logInData.username}
        onChange={handleChanges}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        placeholder="Password"
        value={logInData.password}
        onChange={handleChanges}
      />

      <button type="submit">Next</button>
    </form>
  );
};

export default LoginForm;
