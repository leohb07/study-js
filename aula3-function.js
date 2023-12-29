// Function Hoisting -  Call function before declarations

helloWorld();
function helloWorld() {
  console.log("Hello World");
}

// Functions is First-class objects
const myFunction = function () {
  console.log("This is my function as expression function");
};

// Creating arrow function
const myArrowFunction = () => {
  console.log("This is my arrow function");
};

// Creating object with function
const myObject = {
  myFunctionInObject() {
    console.log("This is my function in object");
  },
};

myObject.myFunctionInObject();
