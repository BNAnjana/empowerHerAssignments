//Grouping and Summing with reduce()

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const counts = categories.reduce((acc, cat) => {
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
}, {});

const sortedCategories = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .map(([category]) => category);

console.log(counts);
console.log(sortedCategories);
