import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../Card/Card";
import "./Expenses.css";
import { Expense } from "../../helpers/types";

type Props = {
  expenses: Expense[];
};

const Expenses = ({ expenses }: Props) => {
  const filterYearHandler = (year: string) => {
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChange={filterYearHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
