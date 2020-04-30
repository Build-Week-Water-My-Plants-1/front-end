import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

/////////////Styling/////////////////

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const WrapperDiv = styled.div`
  width: 200px;
  height: 80%;
  padding: 2% 5% 5% 5%;
  background-color: #f1f3f2;
  opacity: 0.95;
  margin-top: 14%;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const H4 = styled.h4`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0 10% 0;
`;

export const Label = styled.label`
  text-align: left;
  font-weight: 300;
  font-size: 0.9rem;
  padding-top: 5%;
`;

export const Button = styled.button`
  height: 2rem;
  font-size: 0.9rem;
  background-color: #235b2d;
  color: white;
  border-radius: 4px;
  margin-top: 15%;
`;

//////////SignUp function//////////////

const SignUp = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    phone_number: "",
    password: "",
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

        console.log("user id in sign up",res.data.id);

        push("/login");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <ContentDiv>
      <WrapperDiv>
        <Form onSubmit={handleSubmit}>
          <h3>Let's get started!</h3>

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
          <Button type="submit">Next</Button>
        </Form>
      </WrapperDiv>
    </ContentDiv>
  );
};
// const mapStateToProps = (state) => {
//   //console.log("map:", state[0].id);
//   return {
//     id: state[0].id,
//   };
// };
export default SignUp;
