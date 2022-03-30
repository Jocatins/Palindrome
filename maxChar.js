// Checking the maximum character in a string

// Steps
// generate key value pair
// loop through the values of object to see which one has the highest value

// 1. create an object
// 2. if the character of str does not exist in obj then set its value to 1
// 3. if it does do an increment

const maxChar = (str) => {
  let obj = {};
  for (let char of str) !obj[char] ? (obj[char] = 1) : obj[char]++;
  console.log(obj);

  let maxNum = 0;
  let maximumChar = "";

  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maximumChar = char;
    }
  }
  console.log(`${maximumChar} appears ${maxNum} times`);
};
maxChar("hjjkrkrkrkfnjsoa");
