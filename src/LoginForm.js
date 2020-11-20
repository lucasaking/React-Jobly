import React, { useState, useContext } from "react";
import JoblyApi from "./api.js"
import {
  useHistory,
} from 'react-router-dom';
import UserContext from "./UserContext";

function LoginForm() {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({ username: "", password: "" });
    history.push("/");
  }

  return (
    <div className="alignment">
      <form onSubmit={handleSubmit} className="commonForm">
        <div className="formDetails">
          <label htmlFor="LoginForm-username">Username</label>
          <input
            id="loginForm-username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
        </div>
        <div className="formDetails">
          <label htmlFor="LoginForm-password">Password</label>
          <input
            id="loginForm-password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            type ="password"
          />
        </div>
        <button className="btn2">CONFIRM</button>
      </form>
    </div>
  );
}

export default LoginForm;