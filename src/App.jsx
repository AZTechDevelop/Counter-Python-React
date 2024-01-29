import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const fetchCounter = async () => {
    const response = await fetch('http://localhost:5000/get_counter');
    const data = await response.json();
    setCounter(data.counter);
  };

  const incrementCounter = async () => {
    await fetch('http://localhost:5000/increment', { method: 'POST' });
    fetchCounter();
  };

  const decrementCounter = async () => {
    await fetch('http://localhost:5000/decrement', { method: 'POST' });
    fetchCounter();
  };

  const resetCounter = async () => {
    await fetch('http://localhost:5000/reset', { method: 'POST' });
    fetchCounter();
  };

  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
