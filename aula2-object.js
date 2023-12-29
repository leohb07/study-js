// Object - atribuicao via desestruturacao

const people = {
  firstName: "Leonardo",
  lastName: "Barrocal",
  age: 22,
  address: {
    city: "Campinas",
    state: "SP",
  },
};

const {
  firstName,
  age,
  address: { city },
} = people;

console.log(firstName, age, city);
