function chunkArrayInGroups(arr, size) {
  let newArr = arr.split(size);
  console.log(newArr);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
