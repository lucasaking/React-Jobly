import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./CompanyList.css";
import JoblyApi from "./api.js";

function CompanyDetail() {

  const { name } = useParams();

  const [companyDetail, setCompanyDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function fetchDetailsWhenMounted() {
    async function fetchDetails() {
      const result = await JoblyApi.getCompany(name);
      setCompanyDetail(result);
      setIsLoading(false);
    }
    fetchDetails();
  }, [name]);


  if (isLoading) return <i>Loading...</i>;

  function renderJobList() {
    return companyDetail.jobs.map(j => (
      <div className="jobCard" key={j.id}>
        <div>Job Title: {j.title}</div>
        <div>Salary: {j.salary}</div>
        <div>Equity: {j.equity}</div>
      </div>
    ));
  }


  return (
    <div className="CompanyList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="centering">
            {companyDetail.name}
          </h1>
        </div>
      </div>
      <div className="row">
        {renderJobList()}
      </div>
    </div>
  );
}


export default CompanyDetail;