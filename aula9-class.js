class People {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  speak() {
    console.log(`${this.firstName} speak with dogs`);
  }
}

const human = new People("Leonardo", "Barrocal");
console.log(human.speak());
