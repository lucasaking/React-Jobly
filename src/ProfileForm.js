import React, { useState, useContext } from "react";
import "./CompanyList.css";
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom';
import UserContext from "./UserContext";
import JoblyApi from "./api.js";


function ProfileForm() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
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
    console.log("form data ", formData);
    console.log("CURREENNT", currentUser)
    let user  = await JoblyApi.updateUser(currentUser.username, formData);
    console.log("USSSEERRRR", user)
    setFormData(data => ({...data, ...user}));
  }

  return (
    <div className="alignment">
      <h1 className="alignment">Username: <span>{currentUser.username}</span></h1>
      <form onSubmit={handleSubmit} className="commonForm">
        <div className="formDetails">
          <label htmlFor="firstName">First Name </label>
          <input
            id="firstName"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="lastName">Last Name </label>
          <input
            id="lastName"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="email">Email </label>
          <input
            id="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="password">Confirm Password </label>
          <input
            id="password"
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

export default ProfileForm;
