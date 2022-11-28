
var arrayOfNumbers = [1, 3, 7, 8, 10, 9, 7, 3];
console.log(arrayOfNumbers);
console.log(`Total number of elements available  in array : ${arrayOfNumbers.length}`);

// access element from array 
var accessArray = arrayOfNumbers[2] // access 2nd number index element 
console.log(accessArray);

// Update array 
 arrayOfNumbers[2] = 77; // update value 77 instead of 7
console.log(arrayOfNumbers);

console.log("======================= Resize Array =========================");
arrayOfNumbers.length= 3 // now array length is 3.
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);

arrayOfNumbers.length = 10;
console.log(arrayOfNumbers.length); // now array of length is 10
console.log(arrayOfNumbers);

// how to empty array

arrayOfNumbers.length = 0;
console.log(arrayOfNumbers);