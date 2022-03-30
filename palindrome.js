//   Palindromes

//   solution
//   1 reverse the string
//   2 check the original if they are the same

// const Palindrome = (str) => {
//   const isPalindrome = str.split("").reverse().join("");
//   console.log(str === isPalindrome);
// };

// Palindrome("jaaj");

(function (str) {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(str === reversed);
})("david");
