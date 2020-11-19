import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.css";
import UserContext from "./UserContext";

function Navigation() {
  const {currentUser, logout} = useContext(UserContext);

  console.log("NAVIGATIONNNNNN", currentUser);
  return (
    <div>{
      currentUser.token && (
        <nav>
          <NavLink className="logo" exact to="/">Jobly</NavLink>
          <NavLink exact to="/companies">Companies</NavLink>
          <NavLink exact to="/jobs">Jobs</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <NavLink exact to="/logout">Logout<span> {currentUser.username}</span></NavLink>
        </nav>
      )}


      {
        !currentUser.token && (
          <nav>
            <NavLink className="logo" exact to="/">Jobly</NavLink>
            <NavLink exact to="/login">Login</NavLink>
            <NavLink exact to="/signup">Signup</NavLink>
          </nav>
        )}
    </div>
  )
}

export default Navigation;