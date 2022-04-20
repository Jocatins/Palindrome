function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
//   Code Explanation
// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

//   Code Explanation
// We provide Math.max with the length of each word as argument, and it will simply return the highest of all.

// Let’s analyze everything inside the Math.max parenthesees to understand how we do that.

// str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

// Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

// str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

// Finally, we pass the array as argument for the Math.max function with the spread operator ...
