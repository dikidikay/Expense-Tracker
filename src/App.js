import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 50000,
    date: new Date(2022, 0, 14),
  },
  { id: "e2", title: "New Shoe", amount: 500000, date: new Date(2022, 1, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 150000,
    date: new Date(2022, 10, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 500000,
    date: new Date(2022, 11, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
