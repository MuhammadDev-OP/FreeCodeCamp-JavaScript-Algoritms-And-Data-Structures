function getIndexToIns(arr, num) {
    const newArr = arr.sort();
    console.log(newArr)
    newArr.push(num);
    console.log("Here you go Mujahid!")
    newArr.sort()
    return newArr;
  }
  
  console.log(getIndexToIns([40, 60], 50));