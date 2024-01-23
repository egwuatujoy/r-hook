import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  
  const [titleFilter, setTitleFilter] =  useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilterChange({ title: e.target.value, rate: rateFilter });
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
    onFilterChange({ title: titleFilter, rate: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
        style={{ outline: 'none', padding: '8px' }}
      />
      <input
        type="number"
        placeholder="Filter by rate"
        value={rateFilter}
        onChange={handleRateChange}
        style={{ outline: 'none', padding: '8px' }}
      />
    </div>
  );
};
 
export default Filter;