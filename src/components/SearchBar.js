import React from 'react'; // Import React library
import '../App.css'; // Import the CSS file for styling

// Functional component for the search bar
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar"> {/* Container for the search bar */}
      <input
        type="text" // Input type is text for search
        placeholder="Search transactions..." // Placeholder text in the search bar
        value={searchTerm} // Controlled component value from parent state
        onChange={(e) => onSearchChange(e.target.value)} // Trigger onSearchChange function on input change
      />
    </div>
  );
};

export default SearchBar;
