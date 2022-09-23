import Expensess from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = () => {
  const Expenses = [
    {
      date: new Date(2021, 4, 12),
      title: "Car insurance",
      amount: 2894.98,
    },
    {
      date: new Date(2021, 4, 12),
      title: "Life",
      amount: 294.98,
    },
    {
      date: new Date(2021, 4, 12),
      title: "House",
      amount: 394.98,
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expensess item={Expenses}></Expensess>
    </div>
  );
};

export default App;
