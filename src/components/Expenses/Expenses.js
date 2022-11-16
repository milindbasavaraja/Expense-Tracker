import "./expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (expenseFilter) => {
    console.log("In Expenses");
    console.log(expenseFilter);
    setFilteredYear(expenseFilter);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onExpenseFilter={expenseFilterHandler}
      />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
