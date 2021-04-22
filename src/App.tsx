import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./helpers/types";

const App = () => {
  const data = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14).toString(),
    },
    {
      id: "e2",
      title: "New Television",
      amount: 799.49,
      date: new Date(2021, 2, 12).toString(),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28).toString(),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12).toString(),
    },
  ];

  const [expenses, setExpenses] = useState(data);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={[...expenses].reverse()} />
    </div>
  );
};

export default App;
