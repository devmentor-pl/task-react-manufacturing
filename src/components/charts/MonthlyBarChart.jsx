import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Funkcja pomocnicza do pobrania miesiąca i roku z daty
const getMonthYear = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}-${date.getFullYear()}`; // np. "7-2025"
};

const MonthlyBarChart = () => {
  const transactions = useSelector(state => state.transactions.transactions);

  // Grupujemy przychody i wydatki po miesiącach
  const dataMap = {};

  transactions.forEach(({ date, amount, type }) => {
    if (!date) return;
    const monthYear = getMonthYear(date);

    if (!dataMap[monthYear]) {
      dataMap[monthYear] = { month: monthYear, income: 0, expense: 0 };
    }

    if (type === 'income') {
      dataMap[monthYear].income += Number(amount);
    } else if (type === 'expense') {
      dataMap[monthYear].expense += Number(amount);
    }
  });

  // Zamieniamy obiekt na tablicę i sortujemy wg daty (rosnąco)
  const data = Object.values(dataMap).sort((a, b) => {
    const [mA, yA] = a.month.split('-').map(Number);
    const [mB, yB] = b.month.split('-').map(Number);
    return yA !== yB ? yA - yB : mA - mB;
  });

  if (data.length === 0) {
    return <p>Brak danych do wykresu miesięcznego.</p>;
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Przychody i wydatki miesięczne</h2>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#82ca9d" name="Przychody" />
          <Bar dataKey="expense" fill="#ff4d4f" name="Wydatki" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
