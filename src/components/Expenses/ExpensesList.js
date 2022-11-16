import "./expensesList.css";
import ExpenseItem from "./ExpenseItems";

const ExpensesList = (props) => {
  //Method 2 for conditiona
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
