let arr = [0,1,2];
console.log(typeof arr);

let dog = {
  dogName: "JavaScript",
  weight:2.4,
  color:"brown",
  breed:"chihuahua",
  age: 3,
  burglarBitter: true
};

let dogColor1 = dog["color"];

let dogColor2 = dog.color;

dog["color"] = "blue";
dog.weight = 2.3;
dog["age"] = "three";

let variable = "age";
variable = "breed";
// console.log(dog[variable]);

// console.log(dog);

dog[variable] = "dachshund";
console.log(dog["breed"]);