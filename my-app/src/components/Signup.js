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
