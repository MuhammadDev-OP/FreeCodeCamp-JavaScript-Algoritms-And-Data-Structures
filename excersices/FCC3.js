function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const largelement = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largelement) {
        largelement = arr[i][j];
      }
      result[i] = arr[j];
    }
  }
  console.log(result)
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);











console.log("Second")

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
    console.log(results[i])
  }
  return results;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
