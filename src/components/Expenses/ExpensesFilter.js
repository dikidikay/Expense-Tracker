import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option>Filter</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
