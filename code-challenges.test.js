// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
// 
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

describe("anObject", () => {
  it("a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
      expect(anObject({ number: 6 })).toEqual([1, 1, 2, 3, 5, 8]);
      expect(anObject({ number: 10 })).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// Pseudo code:
// Create a function called aObject 
// parameter: object
// input: 6, 10 
// output: [1, 1, 2, 3, 5, 8], [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// create a condtional that will check if it equals 1 then 2 and then if its greater than 2.
// create a conditional that will add the length of the numbers in squence. 
// create a loop if i=2 or greater than i then add 1 and keep adding.
// use .push to add at the end of the array. 


const anObject = (object) => {
 if (object === 1){
   return [1];
  }else if (object === 1){
    return [1, 1];
  }else {

     const fibonacci = [1,1]

    for( let i=2; i< object; i++){
      const fibonaccii = fibonacci[i - 1] + fibonacci[i - 2]
      fibonacci.push(fibonaccii)
      return fibonacci
    }
  }}

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortObjectValues", () => {
  it("a function that takes in an object and returns an array of the object's values sorted from least to greatest.", () => {
      expect(sortObjectValues(studyMinutesWeek2)).toEqual([15, 15, 20, 30, 30, 60, 90]);
      expect(sortObjectValues(studyMinutesWeek)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});
// b) Create the function that makes the test pass.

function sortObjectValues(obj) {
  const valuesArray = Object.values(obj);
  valuesArray.sort((a, b) => a - b);
  return valuesArray;
}

// Pseudo code:
// input: 
// sunday: 100,
  // monday: 10,
  // tuesday: 45,
  // wednesday: 60,
  // thursday: 20,
  // friday: 15,
  // saturday: 65

  // sunday: 100,
  // monday: 10,
  // tuesday: 45,
  // wednesday: 60,
  // thursday: 20,
  // friday: 15,
  // saturday: 65

  // output: [15, 15, 20, 30, 30, 60, 90]; [10, 15, 20, 45, 60, 65, 100]

  // create a function called sortObjectValues.
  // Object.values(obj) is used to extract all the values from the input object.
  // .sort it sorts them in an array.
  // the sorted array is returned as the result of the function.

