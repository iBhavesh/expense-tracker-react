import React, { useState } from "react";
import "./ExpenseForm.css";
import { getYYYYMMDD } from "../../../helpers/helpers";
import { Expense } from "../../../helpers/types";

type Props = {
  onSubmitExpenseData: (expense: Expense) => void;
  onCancel: () => void;
};

const ExpenseForm = (props: Props) => {
  const today = getYYYYMMDD(Date());
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(today);

  const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
      id: Date.now().toString(),
    };
    props.onSubmitExpenseData(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(today);
  };

  const cancelHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            required
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            required
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max={today}
            value={enteredDate}
            required
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
