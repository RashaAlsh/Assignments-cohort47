
function calculateDogAge(humanAge) {
  const dogAge = (humanAge * 7);
  return `Your doggie is ${dogAge} years old in dog years!`;
}

main();

function main() {
 console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
 console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
 console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
}


// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = calculateDogAge;