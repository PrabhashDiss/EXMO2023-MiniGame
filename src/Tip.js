import React from 'react';

const Tip = ({ tip }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tip!</h5>
        <p class="card-text">{tip}</p>
      </div>
    </div>
  );
};

export default Tip;
