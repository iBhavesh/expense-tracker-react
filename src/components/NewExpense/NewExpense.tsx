import React from "react";
import { Expense } from "../../helpers/types";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense = (props: Props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={props.onAddExpense} />
    </div>
  );
};

export default NewExpense;
