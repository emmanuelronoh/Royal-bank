// Base URL for the JSON server
const BASE_URL = 'http://localhost:8001';

// Function to fetch all transactions from the server
export const fetchTransactions = async () => {
  try {
    // Send a GET request to fetch transactions
    const response = await fetch(`${BASE_URL}/transactions`);
    
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the transactions data
    return data;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error('Error fetching transactions:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Function to add a new transaction to the server
export const addTransaction = async (transaction) => {
  try {
    // Send a POST request to add a new transaction
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: 'POST', // HTTP method for creating a new resource
      headers: { 'Content-Type': 'application/json' }, // Indicate that we're sending JSON data
      body: JSON.stringify(transaction), // Convert the transaction object to a JSON string
    });

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error adding transaction: ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the newly created transaction
    return data;
  } catch (error) {
    // Log any errors that occur during the POST operation
    console.error('Error adding transaction:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
