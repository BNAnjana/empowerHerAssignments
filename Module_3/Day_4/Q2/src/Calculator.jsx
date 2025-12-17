import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  // Function to perform the selected operation
  const handleCalculate = () => {
    if (num1 === '' || num2 === '') return; // Don't calculate if inputs are empty
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    // Perform the selected operation
    switch (operation) {
      case 'Add':
        result = n1 + n2;
        break;
      case 'Subtract':
        result = n1 - n2;
        break;
      case 'Multiply':
        result = n1 * n2;
        break;
      default:
        return;
    }

    // Append the result to the results array
    setResults([...results, { num1: n1, num2: n2, operation, result }]);

    // Clear inputs after calculation
    setNum1('');
    setNum2('');
  };

  return (
    <div className="calculator">
      <div>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="Enter number 1" 
        />
      </div>
      <div>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Enter number 2" 
        />
      </div>
      <div>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="Add">Add</option>
          <option value="Subtract">Subtract</option>
          <option value="Multiply">Multiply</option>
        </select>
      </div>
      <div>
        <button onClick={handleCalculate}>Perform Action</button>
      </div>
      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.num1} {result.operation} {result.num2} = {result.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
