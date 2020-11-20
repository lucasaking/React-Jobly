import React, { useEffect, useContext, useState } from "react";
import "./CompanyList.css";
import UserContext from "./UserContext"

/**
 * State: no state
 * 
 * Props: job ({title, salary, equity, id})
 * 
 */

function JobCard({ job }) {

  const { currentUser, hasApplied, appliedJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(function updateJobApp() {
    console.log("HASS APPLIED", job.id)
    console.log("FUNCTION", hasApplied(job.id))
    setApplied(hasApplied(job.id));
  }, [job.id, hasApplied]);

  async function handleApply(evt) {
    evt.preventDefault();
    if (hasApplied(job.id)) return;
    appliedJob(job.id);
    setApplied(true);
    console.log("APPLIED", job.id);
  }


  return (
    <div className="commonCard">
      <p>Title: {job.title}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button onClick={handleApply} disabled={applied} className="btn">{applied ? "Applied" : "Apply"} </button>

    </div>
  )
}

export default JobCard;