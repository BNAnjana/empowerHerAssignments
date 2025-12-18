import { useState } from "react";

// ComponentA
function ComponentA() {
  return <h2 className="true">Status is TRUE</h2>;
}

// ComponentB
function ComponentB() {
  return <h2 className="false">Status is FALSE</h2>;
}

// Main Component
export default function StatusToggle() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Status</button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}
