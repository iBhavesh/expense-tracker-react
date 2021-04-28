import React from "react";
import { Expense } from "../../../helpers/types";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

type Props = {
  expenses: Expense[];
};

const ExpensesList = (props: Props) => {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no Expenses!</h2>;

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
