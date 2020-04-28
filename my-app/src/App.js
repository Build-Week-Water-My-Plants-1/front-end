import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={LogIn} />
        {/* <SignUp /> */}
      </div>
    </Router>
  );
}

export default App;
