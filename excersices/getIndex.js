function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) return i;
        
    }
    return arr.length
  }
  
  console.log(getIndexToIns([40, 60], 50));