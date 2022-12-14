import "./expenseFilter.css";

const ExpenseFilter = (props) => {
  const changeFilterHandler = (event) => {
    console.log("Changed to:", event.target.value);
    props.onExpenseFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={changeFilterHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
