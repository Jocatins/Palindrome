// Reverse a string

// solution 1
// * given the string convert it to an array
// reverse the array
// turn the array back to a string

const revString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};
revString("Jocatins");

// solution 2
// 1 given string create empty string
// 2. loop through each character
// 3 return the reversed

// (function (str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   console.log({
//     reversed_value: reversed,
//   });
// })("Greetings");
