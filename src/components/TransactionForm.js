import React, { useState } from 'react';
import { addTransaction } from '../api';

// TransactionForm component for adding new transactions
const TransactionForm = ({ onAddTransaction }) => {
  // State variables for form inputs
  const [description, setDescription] = useState(''); // Description of the transaction
  const [amount, setAmount] = useState(''); // Amount of the transaction
  const [category, setCategory] = useState(''); // Category of the transaction
  const [date, setDate] = useState(''); // Date of the transaction

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new transaction object
    const newTransaction = { description, amount, category, date };

    // Call API function to add the new transaction
    await addTransaction(newTransaction);

    // Notify parent component about the new transaction
    onAddTransaction(newTransaction);

    // Reset form fields
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for transaction description */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      
      {/* Input field for transaction amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      
      {/* Input field for transaction category */}
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      
      {/* Input field for transaction date */}
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      
      {/* Submit button to add the transaction */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
