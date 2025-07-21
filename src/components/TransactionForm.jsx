import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactions/TransactionsSlice';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    amount: '',
    type: 'income',
    category: '',
    note: '',
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
  });

  const categories = ['Jedzenie', 'Transport', 'Rozrywka', 'Opłaty', 'Pensja', 'Inne'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category) {
      alert('Uzupełnij wymagane pola');
      return;
    }

    const transaction = {
      id: uuidv4(),
      ...formData,
      amount: parseFloat(formData.amount),
    };

    dispatch(addTransaction(transaction));

    // Reset formularza
    setFormData({
      amount: '',
      type: 'income',
      category: '',
      note: '',
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj transakcję</h2>

      <div>
        <label>Kwota *</label><br />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Typ</label><br />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="income">Przychód</option>
          <option value="expense">Wydatek</option>
        </select>
      </div>

      <div>
        <label>Kategoria *</label><br />
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">-- wybierz --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Notatka</label><br />
        <input
          type="text"
          name="note"
          value={formData.note}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Data</label><br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Dodaj</button>
    </form>
  );
};

export default TransactionForm;
