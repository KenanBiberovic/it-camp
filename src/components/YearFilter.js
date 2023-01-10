import React from "react";

const YearFilter = (props) => {
  const { setYear } = props;
  return (
    <div className="YearFilter">
      <div className="FilterText">
        <h3>Filter by year</h3>
      </div>

      <div className="YearOption">
        <select onChange={(e) => setYear(Number(e.target.value))}>
          <option selected>Not set</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
