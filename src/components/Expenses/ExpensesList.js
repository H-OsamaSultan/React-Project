import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let filteredExpenses = props.fillExpenses;
  //   console.log(filteredExpenses);

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
