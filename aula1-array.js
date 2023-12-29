// Arrays - atribuicao via desestruturacao

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNumer, secondNumber, ...rest] = numbers;

const [um, , tres] = numbers; // Deixe em branco se nao quiser certo index

const numbersTwo = [
  [1, 2, 3],
  [4, 5, 6],
];

const [listOne] = numbersTwo;
const [firstNumberListOne] = listOne;

console.log(firstNumberListOne);
console.log(um, tres);
console.log(firstNumer, secondNumber);
console.log(rest);
