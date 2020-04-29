import React from "react";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";

import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/add" component={AddPlant} />
        <PrivateRoute path="/dashboard" />
      </div>
    </Router>
  );
}

export default App;
