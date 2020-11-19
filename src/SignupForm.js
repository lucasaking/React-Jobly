import React, { useState, useContext } from "react";
import "./CompanyList.css";
import JoblyApi from "./api.js"
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import UserContext from "./UserContext";


function SignupForm(){
  const { signup } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "pair",
    lastName: "coding",
    email: "coding@yahoo.com",
    username: "paircoding",
    password: "foobar",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.createUser(formData);
    signup({username: formData.username, token});
    setFormData({ firstName: "", lastName: "", email: "", username: "", password: "" });
  }

  return (
    <div className="alignment">
      <form onSubmit={handleSubmit} className="commonForm">
        <div className="formDetails">
          <label htmlFor="LoginForm-firstName">First Name </label>
          <input
            id="loginForm-firstName"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="LoginForm-lastName">Last Name </label>
          <input
            id="loginForm-lastName"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="LoginForm-username">Username </label>
          <input
            id="loginForm-username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="LoginForm-email">Email </label>
          <input
            id="loginForm-email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="LoginForm-password">Password </label>
          <input
            id="loginForm-password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
        </div>
        <button className="btn2">CONFIRM</button>
      </form>
    </div>
  );
}

export default SignupForm;




