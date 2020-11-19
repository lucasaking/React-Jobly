import React, { useState } from "react";


function SearchBar({filterList}) {

  const [formData, setFormData] = useState({
    term: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    filterList(formData.term);
  }


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }
  // end

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchForm">
        <input
            id="term"
            name="term"
            value={formData.term}
            placeholder = "Enter search term"
            onChange={handleChange}
        />
        <div></div>
        <button className="btn3">Submit</button>
      </form>
    </div>
  );
}


export default SearchBar;