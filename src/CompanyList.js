import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CompanyCard from "./CompanyCard";
import "./CompanyList.css";
import JoblyApi from "./api.js"

/**
 * State: companyList
 *
 * 
 */

function CompanyList() {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const companies = await JoblyApi.getCompanyList();

      console.log(companies);
      setCompanyList(companies);
      setIsLoading(false);
    }
    fetchCompanies();
  }, []);


  if (isLoading) return <i>Loading...</i>;

  function renderCompanyList() {

    return companyList.map(c => (
      <div key={c.handle}>
        <CompanyCard name={c.name} logoUrl={c.logoUrl} description={c.description} handle={c.handle} />
      </div>
    ));
  }

  return (
    <div className="companyList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="centering">
            COMPANY LIST
          </h1>
        </div>
      </div>
      <div className="row">
        {renderCompanyList()}
      </div>
    </div>
  );
}

export default CompanyList;