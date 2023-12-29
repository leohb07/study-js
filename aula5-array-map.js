// Map in Arrays

const numbers = [5, 50, 80, 1, 2, 3, 8, 22, 27];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

const peoples = [
  { name: "Luiz", age: 25 },
  { name: "Leonardo", age: 22 },
  { name: "Evelin", age: 20 },
  { name: "Bruno", age: 16 },
];

const names = peoples.map((people) => people.name);
console.log(names);

const ages = peoples.map((people) => {
  return { age: people.age };
});
console.log(ages);

const newObj = peoples.map((people, index) => {
  return { id: index + 1, ...people };
});
console.log(newObj);
