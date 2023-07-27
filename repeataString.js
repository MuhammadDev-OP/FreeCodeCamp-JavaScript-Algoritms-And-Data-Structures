function repeatStringNumTimes(str, num) {
  let storeValue = "";
  if (num === null) {
    return 0;
  } else {
    for (let i = 0; i < num; i++) {
      storeValue = str;
      console.log(storeValue);
    }
  }
  return str;
}

repeatStringNumTimes("abc", 0);
