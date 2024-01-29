import React from 'react';

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
