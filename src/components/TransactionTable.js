import React from 'react'; // Import React library for creating components
import './TransactionTable.css'; // Import the CSS file for styling the table

// Functional component to render the transaction table
const TransactionTable = ({ transactions, onDeleteTransaction }) => {
  return (
    <table className="transaction-table"> {/* Main table container with class for styling */}
      <thead>
        <tr>
          {/* Table headers */}
          <th>ID</th> {/* Unique identifier for each transaction */}
          <th>Description</th> {/* Description of the transaction */}
          <th>Amount</th> {/* Amount of the transaction */}
          <th>Date</th> {/* Date of the transaction */}
          <th>Actions</th> {/* Column for action buttons */}
        </tr>
      </thead>
      <tbody>
        {/* Iterate over transactions and render each one in a table row */}
        {transactions.map((transaction) => (
          <tr key={transaction.id}> {/* Unique key for each row based on transaction ID */}
            <td>{transaction.id}</td> {/* Display transaction ID */}
            <td>{transaction.description}</td> {/* Display transaction description */}
            <td>${transaction.amount}</td> {/* Display transaction amount formatted as currency */}
            <td>{new Date(transaction.date).toLocaleDateString()}</td> {/* Format and display transaction date */}
            <td>
              <button
                className="delete-button" // Button styling class
                onClick={() => onDeleteTransaction(transaction.id)} // Trigger delete function with transaction ID
              >
                Delete {/* Button text */}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
