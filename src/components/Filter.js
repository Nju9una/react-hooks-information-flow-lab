import React from 'react';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
