import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

interface Props {
  expenses: Expense[];
}

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const Expenses = ({ expenses }: Props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
    </Card>
  );
};

export default Expenses;
