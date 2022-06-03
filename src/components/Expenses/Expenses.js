import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("Filter");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    console.log(typeof selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (x) => x.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredYear === "Filter" ? (
        props.items.map((x) => (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        ))
      ) : filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((x) => (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
