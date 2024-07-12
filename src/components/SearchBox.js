import React from 'react';
import '../styles/searchbox.css';

const SearchBox = () => {
  return (
    <div className="search-box">
      <i className="uil uil-search"></i>
      <input type="text" placeholder="Search here..." />
    </div>
  );
};

export default SearchBox;
