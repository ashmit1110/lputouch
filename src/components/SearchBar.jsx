import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span className="search-placeholder">Search</span>
      </div>
    </div>
  );
};

export default SearchBar;
