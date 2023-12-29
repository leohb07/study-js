// Filter, Map and Reduce in Array

const numbers = [5, 50, 80, 1, 2, 3, 8, 22, 27, 24, 25, 12, 13, 14];

const newNumbers = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  .reduce((acc, value) => acc + value);

console.log(newNumbers);
