console.log("hello world 123");

const gas = [20, 30, 100, 500];
const food = [10, 123, 546, 900];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Lots of spendings`);
    return total;
  }
  console.log(`You're good on spendings`);
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([80, 10, 9]);

console.log(gasTotal, foodTotal, randomTotal);
