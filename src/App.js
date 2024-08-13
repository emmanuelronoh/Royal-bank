// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './api'; // Import function to fetch transactions from the API
import TransactionTable from './components/TransactionTable'; // Import TransactionTable component
import TransactionForm from './components/TransactionForm'; // Import TransactionForm component
import SearchBar from './components/SearchBar'; // Import SearchBar component
import './App.css'; // Import the CSS file for styling

const App = () => {
  // State to hold the list of transactions
  const [transactions, setTransactions] = useState([]);
  
  // State to hold the current search term for filtering transactions
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect hook to fetch transactions when the component mounts
  useEffect(() => {
    const getTransactions = async () => {
      try {
        // Fetch transactions from the API
        const data = await fetchTransactions();
        // Update state with fetched transactions
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    
    getTransactions(); // Call the function to fetch transactions
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Handler to add a new transaction to the state
  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  // Handler to delete a transaction by ID
  const handleDeleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Main heading with CSS class for styling */}
      <h1 className="heading">Royal Bank of Flatiron</h1>
      
      {/* SearchBar component for filtering transactions */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* TransactionForm component for adding new transactions */}
      <TransactionForm onAddTransaction={handleAddTransaction} />
      
      {/* TransactionTable component to display the list of transactions */}
      <TransactionTable
        transactions={filteredTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
};

export default App;
