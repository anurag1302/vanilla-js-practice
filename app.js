console.log("hello world 123");

const gas = [20, 30, 100, 500];
const food = [10, 123, 546, 900];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Lots of spendings, Total is : ${total}`);
    return total;
  }
  console.log(`You're good on spendings, Total is : ${total}`);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([80, 10, 9]);

console.log(gasTotal, foodTotal, randomTotal);

//Primitive and non Primitive Data Types
//Strings, Numbers, Booleans, null, undefined are primitive data types
//Objects, Arrays, Functions are non-primitive data types,
//these are collectively known as Objects
//Primitive data types are stored by value, while non primitive ones are stored by reference

let number1 = 10;
let number2 = number1;
console.log(`Number 1 is ${number1}`);
console.log(`Number 2 is ${number2}`);
number2 = 20;
console.log(`Number 2 again is ${number2}`);
console.log(`Number 1 again is ${number1}`);

let person = { name: "Henry" };
let person2 = person;
console.log(`Person 1 name is ${person.name}`);
console.log(`Person 2 name is ${person2.name}`);
person2.name = "John";
console.log(`Person 1 name is ${person.name}`);
console.log(`Person 2 name is ${person2.name}`);
