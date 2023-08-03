// function titleCase(str) {
//     let str2 = str.split('')
//     let newString;

//     for (let i = 0; i < str2.length; i++) {
//         newString = str2.toUpperCase(0)
//     }
//     return newString;
//   }

//   titleCase("I'm a little tea pot");

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(" ")
}

console.log(titleCase("I'm a little tea pot"));
