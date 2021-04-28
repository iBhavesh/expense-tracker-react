import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import Card from "../Card/Card";
import "./Expenses.css";
import { Expense } from "../../helpers/types";

type Props = {
  expenses: Expense[];
};

const Expenses = (props: Props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterYearHandler = (year: string) => {
    setFilterYear(year);
  };
  const expenses = props.expenses.filter(
    (value) => value.date.getFullYear() === Number(filterYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChange={filterYearHandler} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
