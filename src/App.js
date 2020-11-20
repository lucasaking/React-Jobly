import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api.js";
import useLocalStorage from "./useLocalStorage";

/**
 * State: currentUser
 */

function App() {

  const [value, setValue] = useLocalStorage(
    'currentUser'
  );

  let initObj = {
    username: value.username || "",
    token: value.token || ""
  }


  const [currentUser, setCurrentUser] = useState(initObj);
  const [applicationIds, setApplicationIds] = useState(new Set([]));


  useEffect(function updateToken() {
    JoblyApi.token = currentUser.token;
  }, [currentUser]);



  useEffect(function updateCurrentUser() {
    async function getUserDetails() {
      const result = await JoblyApi.getUserDetails(currentUser.username);
      if (!currentUser.firstName) {
        setCurrentUser(data => ({...data, ...result}));
        setApplicationIds(new Set(currentUser.applications));
      }
    }
    getUserDetails();
  }, [currentUser]);


  async function signup(formData) {
    const token = await JoblyApi.createUser(formData);
    const currUser = { username: formData.username, token };
    setValue(JSON.stringify(currUser));
    setCurrentUser(currUser);
  }

  async function login(formData) {
    const token = await JoblyApi.loginUser(formData);
    const loginUser = { username: formData.username, token }
    setValue(JSON.stringify(loginUser));
    setCurrentUser(loginUser);
  }

  function hasApplied(id) {
    return applicationIds.has(id);
  }

  async function appliedJob(id) {
    if (hasApplied(id)) return;
    await JoblyApi.appliedJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  function logout() {
    setValue("");
    setCurrentUser({
      username: "",
      token: ""
    });
  }

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, signup, login, logout, hasApplied, appliedJob }}>
          <Navigation />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
