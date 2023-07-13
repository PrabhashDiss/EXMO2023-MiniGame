import React from 'react';

const PasswordInput = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="password">Enter Password:</label>
      <input
        type="password"
        id="password"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordInput;
