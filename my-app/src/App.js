import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <LogIn />
      <SignUp />
    </div>
  );
}

export default App;
