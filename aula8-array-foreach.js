const array = [10, 20, 30, 40, 50];
let total = 0;
array.forEach((value) => {
  total += value;
});
console.log(total);

console.log("-----------------");

for (let value of array) {
  console.log(value);
}
