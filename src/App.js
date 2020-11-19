import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import Routes from "./Routes";
import Navigation from "./Navigation";

/**
 * State: currentUser
 */

function App() {

  const initObj = {
    username: "",
    token: ""
  }

  const [currentUser, setCurrentUser] = useState(initObj);

  function signup(currentUser) {
    setCurrentUser(currentUser);
  }

  function login(currentUser) {
    setCurrentUser(currentUser);
  }

  function logout() {
    setCurrentUser(initObj);
  }

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, signup, login, logout }}>
          <Navigation />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
