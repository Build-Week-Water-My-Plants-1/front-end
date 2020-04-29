import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
import img from "./images/plantbackground.jpg"

/////////////Styling/////////////////
const ContentDiv = styled.div`
  background-image: img;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const WrapperDiv = styled.div`
  width: 20%;
  height: 80%;
  padding: 2% 5% 5% 5%;
  background-color: #f1f3f2;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const H4 = styled.h4`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  margin: 0 0 10% 0;
`;

const Label = styled.label`
  text-align: left;
  font-weight: 300;
  font-size: 0.8rem;
  padding-top: 5%;
`;

const Button = styled.button`
  height: 2rem;
  font-size: 0.9rem;
  background-image: ;
  background: rgba(0.75);
  color: white;
  margin-right: 20px;
`;

/////////////////////LoginForm function/////////////////
const LoginForm = (props) => {
  const [logInData, setLogInData] = useState({ username: "", password: "" });

  const handleChanges = (event) => {
    event.preventDefault();
    setLogInData({ ...logInData, [event.target.name]: event.target.value });
    //console.log(logInData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", logInData)
      .then((res) => {
        //console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        setLogInData({ username: "", password: "" });
        props.history.push("/add");
      })
      .catch((err) => console.log(err, logInData));
  };

  return (
    <ContentDiv>
      <WrapperDiv>
        <Form onSubmit={onSubmit}>
          <h4>Welcome back!</h4>
          <H4>Log into your account</H4>
          <Label htmlFor="username">Username</Label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={logInData.username}
            onChange={handleChanges}
          />
          <Label htmlFor="password">Password</Label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={logInData.password}
            onChange={handleChanges}
          />
          <Button type="submit">Next</Button>
        </Form>
      </WrapperDiv>
    </ContentDiv>
  );
};

export default LoginForm;
