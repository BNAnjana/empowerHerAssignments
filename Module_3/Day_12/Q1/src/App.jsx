import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Headphones", price: 150 },
  { id: 6, name: "Keyboard", price: 100 },
  { id: 7, name: "Mouse", price: 50 },
  { id: 8, name: "Charger", price: 40 },
  { id: 9, name: "USB Cable", price: 20 },
  { id: 10, name: "Webcam", price: 80 },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  console.log("App rendered");

  // useMemo: total price only recalculates when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // useCallback: function reference stays the same between renders
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCounter((c) => c + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
