import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
    return (
    <div className="counter">
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
}

export default Counter;