// src/ExpenseTracker.js

import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: {expense.amount.toFixed(2)}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;