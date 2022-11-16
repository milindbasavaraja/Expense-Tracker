import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandlaer = () => {
    setIsEditing(false);
  };
  const startEditingHandlaer = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandlaer}
        />
      ) : (
        <button onClick={startEditingHandlaer}> Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
