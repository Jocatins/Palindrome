// write a function , 'chunk(arr, n)', that returns chunked array of size n
// at the the least

// Solution
// 1. create an array called "chunked" = []
// 2. get the last chunked array within last = "chunked"
// 3. check if last exist OR size lasts equals to n. If it does exist, then push into
//     "chunked" ELSE push into last
//4 return chunked

const chunks = ((arr, n) => {
  const chunked = [];
  for (let elem of arr) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === n) chunked.push([elem]);
    else last.push(elem);
  }

  return chunked;
})([3, 4, 65, 2, 1, 3, 5, 7, 8], 5);
console.log({
  chunks: chunks,
});
