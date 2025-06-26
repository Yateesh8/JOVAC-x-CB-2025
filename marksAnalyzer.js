function totalMarks() {// function to calculate total marks
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

function averageMarks() { // function to calculate average marks
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return (sum / this.length).toFixed(2);  
}

function highestMarks() {// function to find the highest marks
  let highest = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] > highest) {
      highest = this[i];
    }
  }
  return highest;
}

function lowestMarks() { // function to find the lowest marks
  let lowest = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < lowest) {
      lowest = this[i];
    }
  }
  return lowest;
}

function passPercentage() { // function to know Pass or Fail
  let passed = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] >= 40) {
      passed++;
    }
  }
  let percent = (passed / this.length) * 100;
  return percent.toFixed(1) + "%";
}
// Higher-order function to analyze marks
function marksAnalyzerHOF(func1, func2, func3, func4, func5, marksArray) {
  return {
    [func1.name]: func1.call(marksArray),
    [func2.name]: func2.call(marksArray),
    [func3.name]: func3.call(marksArray),
    [func4.name]: func4.call(marksArray),
    [func5.name]: func5.call(marksArray),
  };// hof takes five functions and an array of marks
}
const studentMarks = [95, 87, 84, 84, 91]; //sample data

const result = marksAnalyzerHOF(totalMarks,averageMarks,highestMarks,lowestMarks,passPercentage,studentMarks);

console.log(result);
