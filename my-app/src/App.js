import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";

import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AddPlant from "./components/AddPlant";

function App() {
  const [userID, setUserID] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Route exact path="/">
          <SignUp setUserID={setUserID} />
        </Route>
        <Route path="/login" component={LogIn} />
        <Route path="/add">
          <AddPlant userID={userID} />}
        </Route>
      </div>
    </Router>
  );
}

export default App;
