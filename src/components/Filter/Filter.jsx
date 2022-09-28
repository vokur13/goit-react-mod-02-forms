import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find item by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
