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

//Null and Undefined
//Null is something which the developer sets
//null is an assignment value.
//It can be assigned to a variable as a representation of no value
//Undefined refers to something whose value is not found by JavaScript
//undefined means a variable has been declared but has not yet been assigned a value,
//or even a variable hasn't been defined at all
//Ex: 1) variable without value 2) missing function parameters
//    3) missing object properties

let num1 = 20 + null; //20
console.log(`num1 is ${num1}`);
let num2 = 30 + undefined; //NaN
console.log(`num2 is ${num2}`);
console.log(typeof undefined);
console.log(typeof null);
//typeof null is object - its an error in the original javascript implementation

// *****************************************************
// Truthy and Falsy
// Apart from Booleans in IF statements pertaining to true and false,
// we have almost everything as truthy in Javascript apart from few falsy values.
// The falsy ones are "", '',``, 0, -0, NaN, false, null, undefined
const text = "John";
if (text) {
  console.log(`The value: ${text} is truthy.`);
} else {
  console.log(`The value: ${text} is falsy.`);
}

//const text2 = ``;
//const text2 = NaN;
//const text2 = null;
//const text2 = undefined;
//const text2 = 0;
const text2 = -0;
if (text2) {
  console.log(`The value ${text2} is truthy.`);
} else {
  console.log(`The value ${text2} is falsy.`);
}
