import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AddPlant from "./components/AddPlant"

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <AddPlant />
        <Route path="/login">
          <LogIn />
          
        </Route>
        <SignUp />
      </div>
    </Router>

  );
}

export default App;
