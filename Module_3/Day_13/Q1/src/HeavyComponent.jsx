import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI work
  let total = 0;
  for (let i = 0; i < 50_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      <h2>Heavy Component</h2>
      <p>This is an expensive UI section.</p>
    </div>
  );
};

// React.memo prevents re-render if props don't change
export default React.memo(HeavyComponent);
