import React from "react";
import { Link } from 'react-router-dom';
//import "./CompanyList.css";

function CompanyCard({name, description, logoUrl, handle}) {

  return (
    <div className="companyCard">
      <Link to={`/companies/${handle.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <img src={logoUrl} alt={name} />
      </Link>
    </div>
  )
}

export default CompanyCard;