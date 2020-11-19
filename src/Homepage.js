import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CompanyList.css";
import UserContext from "./UserContext";


function Homepage() {
  const { currentUser } = useContext(UserContext);

  function createWelcomeMsg() {
    let msg = "";
    if (currentUser.username) {
      msg = `Welcome Back, ${currentUser.username}`;
    }
    return msg;
  }

  return (
    <div className="commonCard">
      <div className="row mt-4">
        <div className="col">
          <h1 className="centering">
            Jobly!
          </h1>
          <p className="alignment">All the jobs in one, convenient place.</p>
        </div>
      </div>
      <div>
        {!currentUser.username &&
        <p className="homepage">
        <span className="alignment-btn">
          <Link className="btn3" exact to="/login" style={{ textDecoration: 'none' }}>Log-in</Link>
       
          <Link className="btn3" exact to="/signup" style={{ textDecoration: 'none' }}>Sign-up</Link>
        </span>
        </p>}
      </div>
      <div className="alignment">
        <h1>{createWelcomeMsg()}</h1>
      </div>
      <div className="row">
      </div>
    </div>
  )
}

export default Homepage;