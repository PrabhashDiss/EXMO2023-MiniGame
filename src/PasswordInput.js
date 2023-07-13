import React from 'react';

const PasswordInput = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Enter Password</span>
        <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" value={value} onChange={onChange}/>
        <button type="button" class="btn btn-outline-success">Submit</button>
      </div>
    </form>
  );
};

export default PasswordInput;
