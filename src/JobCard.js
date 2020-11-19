import React from "react";
import "./CompanyList.css";

/**
 * State: no state
 * 
 * Props: job ({title, salary, equity, id})
 * 
 */

function JobCard({ job }) {

  function handleApply(){
    console.log("APPLIED");
  }

  return (
    <div className="commonCard">
      <p>Title: {job.title}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button onClick={handleApply} className="btn">APPLY</button>
    </div>
  )
}

export default JobCard;