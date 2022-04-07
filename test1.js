// Re-initializing Variables Inside a Loop

function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (j = 0; j < n; j++) {
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 1);
console.log(matrix);
