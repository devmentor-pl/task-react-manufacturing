import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactions/TransactionsSlice';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  if (transactions.length === 0) {
    return <p>Brak transakcji</p>;
  }

  return (
    <div>
      <h2>Lista transakcji</h2>
      <ul>
        {transactions.map(({ id, amount, type, category, note, date }) => (
          <li key={id} style={{ color: type === 'income' ? 'green' : 'red', marginBottom: '10px' }}>
            <strong>{category}</strong> — {amount.toFixed(2)} PLN ({type}) <br />
            <small>{date}</small><br />
            {note && <em>Notatka: {note}</em>}<br />
            <button onClick={() => dispatch(deleteTransaction(id))}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
