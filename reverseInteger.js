// Write algorithm to reverse an integer

// Steps
// 1. Convert to a string first
// 2. turn it into an array
// 3. reverse method
// 4. back to string
// 5. back to int

const reverseInt = (n) => {
  return parseInt(n.toString().split("").reverse().join(""));
};
console.log("Reversed String :", reverseInt(909098754));
