// // var y = function xyz() {
// //   console.log("Hello, World!");
// // }
// // xyz(); //reference error: xyz is not defined
// // // This will throw an error because xyz is not defined in the global scope

// function showName(){
//     let name = "Yateesh";
// }
// showName(); //function runs here.
// //After successful execution, 'name' is not reachable 
// //and will be garbage collected.

// element.addEventListener("event", callback);

//console.log("yateesh gangwar")

// 3 operation functions
// Operation functions using 'this' instead of arguments or ...nums

function addAll() {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum; //function returns the sum of all elements
}

function subtractAll() {
  let result = this[0];
  for (let i = 1; i < this.length; i++) {
    result -= this[i];
  }
  return result; //function returns the result of subtracting all elements 
}

function multiplyAll() {
  let result = 1;
  for (let i = 0; i < this.length; i++) {
    result *= this[i]; // function returns the product of all elements
  }
  return result;
}

function hof3(func1, func2, func3, numbers) { //first three functions are passed as arguments
  return {
    [func1.name]: func1.call(numbers),
    [func2.name]: func2.call(numbers),
    [func3.name]: func3.call(numbers),
  };// hof3 takes three functions and an array of numbers
}

const result = hof3(addAll, subtractAll, multiplyAll, [1, 2, 3]);
console.log(result); // result will be displayed as an object with the results of each operation