function mutation(arr) {
    const newArr = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < newArr.length; i++) {
       console.log(((target.indexOf(newArr[i]) < 0)))
    }
    return true


}

  console.log(mutation(["hello", "hey"]));