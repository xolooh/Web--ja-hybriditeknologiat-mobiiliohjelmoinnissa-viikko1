import React, { useState } from 'react';
import './App.css';

function App() {
    const [age, setAge] = useState('');
    const [lowerLimit, setLowerLimit] = useState(null);
    const [upperLimit, setUpperLimit] = useState(null);
    const [error, setError] = useState('');

    const handleAgeChange = (event) => {
      const value = event.target.value;
      if (value === '' || /^[1-9]*$/.test(value)) {  //Tätä piti tutkailla kauvan miten saan ettei voi pistää - merkkistä ikää.
          setAge(value);
          setError('');
      }
  };

    const calculateLimits = () => {
        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber <= 0) {
          setError("Please enter a valid age greater than 0.");
            return;
        }

        const lower = (220 - ageNumber) * 0.65;
        const upper = (220 - ageNumber) * 0.85;

        setLowerLimit(lower.toFixed(2));
        setUpperLimit(upper.toFixed(2));
        setError('');
    };

    return (
        <div className="Heart-Rate">
            <h1>Heart Rate Limits Calculator</h1>
            <div className="input-container">
                <label htmlFor="age">Enter your age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={handleAgeChange}
                    placeholder="Age"
                    min="1"
                />
                <button onClick={calculateLimits}>Calculate</button>
            </div>
            {lowerLimit !== null && upperLimit !== null && (
                <div className="results">
                    <h2>Heart Rate Limits:</h2>
                    <p>Limits</p>
                    <p>{lowerLimit} - {upperLimit}</p>
                </div>
            )}
        </div>
    );
}

export default App;