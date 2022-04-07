// Check Permutation

// Given two strings, write a method to decide if one is a permutation of the other

// Algorithm
// 1. Check if they are the same exact strings - else
// 2, check the lengths of both string -else
// 3. create objects of each one
// 4. check if the objects character count are equal - else
// 5 return true
const A = "titan";
const B = "tntai";
const C = "sphinx";

const isObject = (str) => {
  let obj = {};
  for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
  return obj;
};
//console.log(isObject(A));

const IsPermutation = (str1, str2) => {
  // Check if they are the same exact strings - else
  if (str1 === str2) return true;
  else {
    // check the lengths of both string
    if (str1.length !== str2.length) return false;
    // create objects of each one
    else {
      const obj1 = isObject(str1);
      const obj2 = isObject(str2);
      // check if the objects character count are equal
      for (let i in obj1) {
        if (obj1[i] !== obj2[i]) return false;
      }
    }
  }
  return true;
};
console.log({
  isPermutation: IsPermutation(A, C),
});
