import React from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransationList";
import ExpensesChart from "./components/charts/ExpensesChart";
import IncomeChart from "./components/charts/IncomeChart";
import MonthlyBarChart from "./components/charts/MonthlyBarChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mój portfel 💰</h1>

      <div className="top-section">
        <div className="balance-box">
          <Balance />
        </div>
        <div className="glass-box">
          <TransactionForm />
        </div>
      </div>

      <div className="glass-box transaction-list">
        <TransactionList />
      </div>

      <div className="charts">
        <div className="chart-box">
          <IncomeChart />
          <ExpensesChart />
        </div>
        <div className="chart-box">
          <MonthlyBarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
