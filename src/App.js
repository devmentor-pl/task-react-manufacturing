import React, { useEffect } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransationList";
import ExpensesChart from "./components/charts/ExpensesChart";
import IncomeChart from "./components/charts/IncomeChart";
import MonthlyBarChart from "./components/charts/MonthlyBarChart";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "./features/transactions/TransactionsSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
        </div>{" "}
        <div className="chart-box">
          <ExpensesChart />
        </div>
      </div>
      <div className="chart-box">
        <MonthlyBarChart />
      </div>
    </div>
  );
}

export default App;
