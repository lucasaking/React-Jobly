import React, { useContext } from "react"
import UserContext from "./UserContext";
import {
  useHistory,
} from 'react-router-dom';

function Logout() {
  const {logout} = useContext(UserContext);
  const history = useHistory();

  logout();
  history.push("/");
  return (
    <div>
    </div>
  );
}

export default Logout;