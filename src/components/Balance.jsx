import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const transactions = useSelector(state => state.transactions.transactions);

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expenses;

  return (
    <div>
      <h2>Saldo portfela</h2>
      <p>Przychody: <span style={{ color: 'green' }}>{income.toFixed(2)} PLN</span></p>
      <p>Wydatki: <span style={{ color: 'red' }}>{expenses.toFixed(2)} PLN</span></p>
      <hr />
      <p><strong>Saldo: {balance.toFixed(2)} PLN</strong></p>
    </div>
  );
};

export default Balance;
