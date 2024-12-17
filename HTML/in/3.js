const numbers = [1,2,3,4,5,6,7];

const oddNumbers = numbers.filter (num => num % 2 !==0)
const eveNumbers = numbers.filter (num => num % 2 ===0)

console.log (oddNumbers);
console.log (eveNumbers);
console.log (numbers); 