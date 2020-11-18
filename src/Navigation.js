import React from "react"
import {NavLink} from "react-router-dom"
import "./Navigation.css";

function Navigation() {
  

  return (
    <nav>
      <NavLink className="logo" exact to="/">Jobly</NavLink>
      <NavLink exact to="/companies">Companies</NavLink>
      <NavLink exact to="/jobs">Jobs</NavLink>
      <NavLink exact to="/login">Login</NavLink>
      <NavLink exact to="/signup">Signup</NavLink>
      <NavLink exact to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Navigation;