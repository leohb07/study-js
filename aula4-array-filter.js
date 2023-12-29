// Filter in Arrays

const numbers = [5, 50, 80, 1, 2, 3, 8, 22, 27];

let newArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    newArray.push(numbers[i]);
  }
}

const callbackFilter = (value) => {
  return value > 10; // melhor que retornar true or false
};

const numbersBiggerTenWithCallback = numbers.filter(callbackFilter);

const numbersBiggerTen = numbers.filter((number) => number > 10);

console.log(numbersBiggerTen, newArray, numbersBiggerTenWithCallback);

const objectFilter = [
  {
    name: "Leonardo",
    age: 22,
  },
  {
    name: "Evelin",
    age: 20,
  },
  {
    name: "Lolly",
    age: 5,
  },
];

const nameWithLengthBiggerFive = objectFilter.filter(
  (obj) => obj.name.length > 5
);

const agesBiggerTeen = objectFilter.filter((obj) => obj.age > 15);

const namesWhatFinishCharacterO = objectFilter.filter((obj) =>
  obj.name.toLowerCase().endsWith("o")
);

console.log(namesWhatFinishCharacterO);
