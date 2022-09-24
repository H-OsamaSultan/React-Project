import { useState } from "react";
import Expensess from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const InitialDummyData = [
  {
    id: "e1",
    date: new Date(2021, 4, 12),
    title: "Car insurance",
    amount: 2894.98,
  },
  {
    id: "e2",
    date: new Date(2021, 4, 12),
    title: "Life",
    amount: 294.98,
  },
  {
    id: "e3",
    date: new Date(2021, 4, 12),
    title: "House",
    amount: 394.98,
  },
];
const App = () => {
  const [Expenses, setNewData] = useState(InitialDummyData);

  const onExpenseDataSubmitHandler = (recievedExpenseData) => {
    console.log("In appppp");
    console.log(recievedExpenseData);

    //setNewData([recievedExpenseData, ...Expenses]);
    //Or
    setNewData((prevExpenses) => {
      return [recievedExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseDataSubmit={onExpenseDataSubmitHandler}></NewExpense>
      <Expensess item={Expenses}></Expensess>
    </div>
  );
};

export default App;
