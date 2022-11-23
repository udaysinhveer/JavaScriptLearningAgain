console.log("========== array splice() used for remove, insert, replace ============");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
// removes element using splice
// let splicedElement = array_numbers.splice(4); // it removes element from 4th index to end

let splicedElement = array_numbers.splice(2,2); // it removes element from index 2 and removes 2 elements. 
console.log(splicedElement);
console.log(array_numbers);
let array_numbers1 = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers1.splice(1,4)); // it will removes elements from index 1 and removes 4 elements
console.log(array_numbers1);

// add element at specific index using slice

let array_number = [1, 3, 7, 8, 9, 3, 7];
array_number.splice(3,0,45) // it will add element 45 at index 3, (0 - means don't replace or remove)
console.log(array_number);

// remove element at specific index using slice
let array_number1 = [11, 33, 76, 80, 9, 73, 27];
console.log(`Before remove specific element : ${array_number1}`);
array_number1.splice(3,1)// it will remove element at index of 3 (1 means delete/remove) // remove 80
console.log(`After remove specific element : ${array_number1}`);

// replace element at specific index using slice

let array_number2 = [11, 33, 76, 80, 9, 73, 27]; 
array_number2.splice(4,1,26) // it will replace element at index(4) and add 26
console.log(array_number2);
array_number2.splice(2,2,64) // it will remove two values from index 2 and add there 65
console.log(array_number2);
array_number2.splice(2,2,65,44) // it will remove two elements from index 2 and add there 65, 44
console.log(array_number2);
array_number2.splice(2,3,26,46,66) // it will remove 3 elements from index 2 and add 3 values there/replace 
console.log(array_number2);