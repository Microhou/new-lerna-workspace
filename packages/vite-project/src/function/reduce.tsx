const arr = [1,2,3];

const initialValue = 0;
const add = (previousValue, currentValue) => previousValue + currentValue;
const sumArr = arr.reduce(add, initialValue);
console.log(sumArr);

