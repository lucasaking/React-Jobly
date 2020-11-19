import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import "./CompanyList.css";
import JoblyApi from "./api.js";
import SearchBar from "./SearchBar";

  /** State: jobList, isLoading, name(search filter data)
   * 
   *  Props: none
   *  
   */

function JobList() {

  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  function filterList(jobTitle) {
    setName(jobTitle);
  }

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {

      //Define filter object by search term. If none, set an empty object.
      const filterObj = name === "" ? {} : { "title": name };

      //Call apiHelper function with the filter object
      const jobs = await JoblyApi.getJobList(filterObj);
     
      setJobList(jobs);
      setIsLoading(false);
    }
    fetchJobs();
  }, [name]);

  if (isLoading) return <i>Loading...</i>;

  function renderJobList() {
    return jobList.map(j => (
      <JobCard job={j} key={j.id}/>
    ));
  }

  return (
    <div className="companyList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="centering">
            JOB LIST
          </h1>
        </div>
      </div>
      <div className="row">
        <SearchBar filterList={filterList} />
      </div>
      <div className="row">
        {renderJobList()}
      </div>
    </div>
  );
}

export default JobList;