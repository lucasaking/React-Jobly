import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import "./CompanyList.css";
import JoblyApi from "./api.js";
import SearchBar from "./SearchBar";

/**
 * State: companyList, isLoading, name(search filter)
 * 
 * Props: No props
 * 
 */

function CompanyList() {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");


  function filterList(companyName) {
    setName(companyName);
  }

  // function filterList(evt) {
  //   evt.preventDefault();
  //   console.log("FILTER OBJJJJJ",evt.target.form[0].value)
  //   const companyName = evt.target.form[0].value;
  //   setName(companyName);
  // }


  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {

      const filterObj = name==="" ? {} : {name};

      const companies = await JoblyApi.getCompanyList(filterObj);

      setCompanyList(companies);
      setIsLoading(false);
    }
    fetchCompanies();
  }, [name]);


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
        <SearchBar filterList={filterList} />
      </div>
      <div className="row">
        {renderCompanyList()}
      </div>
    </div>
  );
}

export default CompanyList;