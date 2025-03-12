import React, { useState } from 'react';

function App() {
  const [intake, setIntake] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to log water intake
  };

  return (
    <div>
      <h1>Water Intake Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={intake}
          onChange={(e) => setIntake(e.target.value)}
          placeholder="Enter water intake in liters"
        />
        <button type="submit">Log Intake</button>
      </form>
    </div>
  );
}

export default App;
