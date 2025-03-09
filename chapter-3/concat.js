let arr5 = [1,2,3];
let arr6 = [4,5,6];
let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7,8,9);
// arr8.pop(); // Deletes last index of array

// // console.log(arr8);
// arr8.shift(); // Deletes first index of array
// arr8.splice(1,2);
// delete arr8[1];
// console.log(arr8);

let arr8 = [2,6,7,8];
// let  findValue = arr8.find(function(e){
//   return e === 6
// });
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(6,2);
// console.log(findIndex3);

let animals = ["Tiger", "Dragon", "Phoenix", "Falcon", "Eagle","Bear","Owl","Hawk","Lion"];
let lastFalcon = animals.lastIndexOf("Falcon");
console.log(lastFalcon);