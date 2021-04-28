import React, { useState } from "react";
import { Expense } from "../../helpers/types";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense = (props: Props) => {
  const [isAddExpense, setIsAddExpense] = useState(true);
  const cancelExpense = () => {
    setIsAddExpense(false);
  };
  const showExpenseForm = () => {
    setIsAddExpense(true);
  };
  const addExpense = (expense: Expense) => {
    setIsAddExpense(false);
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      {!isAddExpense && (
        <button onClick={showExpenseForm}>Add New Expense</button>
      )}
      {isAddExpense && (
        <ExpenseForm
          onCancel={cancelExpense}
          onSubmitExpenseData={addExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
