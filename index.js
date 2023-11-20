function person(name, age) {
  this.name = name;
  this.age = age;
  return this;
}
person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

function student(score, ...args) {
  person.apply(this, args);
  this.score = score;
  return this;
}
student.prototype = Object.create(person.prototype);
student.prototype.sayScore = function () {
  console.log(`My name is 333${this.name}`);
};

const p = new person("John", 30);
const s = new student(100, "John", 30);
s.sayScore();
console.log(Object.getPrototypeOf(s));
