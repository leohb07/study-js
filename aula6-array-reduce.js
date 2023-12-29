// Reduce in Array
// Utilizado para reduzir nosso array principal (somar os valores)

const numbers = [5, 50, 80, 1, 2, 3, 8, 22, 27];

const total = numbers.reduce((acc, number) => {
  acc += number;
  return acc;
}, 0);

console.log(total);

const peoples = [
  { name: "Luiz", age: 25 },
  { name: "Leonardo", age: 22 },
  { name: "Evelin", age: 20 },
  { name: "Caio", age: 42 },
  { name: "Bruno", age: 16 },
];

const oldPeople = peoples.reduce((acc, value) => {
  if (acc.age > value.age) return acc;

  return value;
  // Enquanto nao acabar o laco, o acc sempre recebe os retornos
});

console.log(oldPeople);
