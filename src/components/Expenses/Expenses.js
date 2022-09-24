import ExpenseItem from "./ExpenseItem";
import react, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList fillExpenses={filteredExpenses}></ExpensesList>
      {/* {props.item.map((item) => {
        console.log(filteredYear);
        console.log(item.date.getFullYear().toString());
        console.log(typeof selectedYear);
        console.log(typeof item.date.getFullYear().toString());

        if (item.date.getFullYear().toString() === filteredYear) {
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>;
        }
      })} */}

      {/* {filteredExpenses.length === 0 && <p>No Expense Found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          ></ExpenseItem>
        ))} */}
    </Card>
  );
};

export default Expenses;
