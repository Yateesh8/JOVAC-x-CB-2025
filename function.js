function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Yateesh"));  // Output: Hello, Yateesh!

# First class function in JavaScript ( You can assign functions to variables, can pass functions as arguments, can return functions from other functions.)

const describeGoal = function() { // A function that describes your goal
  return "I want to master DSA and Web Development!";
};

function showJourney(fn) { // A function that accepts another function as input
  console.log("Your journey so far:");
  console.log(fn());
}

showJourney(describeGoal);

//Output: Your journey so far:
// I want to master DSA and Web Development!


    
