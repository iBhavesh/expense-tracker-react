import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

type Props = {
  date: string;
  title: String;
  amount: Number;
};

const ExpenseItem = (props: Props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">&#x20B9; {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
