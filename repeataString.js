function repeatStringNumTimes(str, num) {
  let storeValue = "";
    for (let i = 0; i < num; i++) {
      storeValue += str;
    }
    console.log(storeValue)
    return storeValue;
  }


repeatStringNumTimes("abc", 3)