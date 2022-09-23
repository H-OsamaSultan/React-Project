import logo from "./logo.svg";

import Expensess from "./components/Expenses/Expenses";
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Expensess item={Expenses}></Expensess>

      {/* </header> */}
    </div>
  );
};

export default App;
