import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../../Card/Card";

type Props = {
  date: Date;
  title: String;
  amount: Number;
};

const ExpenseItem = (props: Props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">&#x20B9; {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
