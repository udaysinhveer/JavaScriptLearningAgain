let setOfNumbers = new Set();
console.log(typeof setOfNumbers);  // it will return object

console.log("============ Adding elements into the set collection ===============");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);

console.log(setOfNumbers);
console.log("============ Adding duplicate elements into the set collection ===============");
setOfNumbers.add(7);      // this 7 element will not add in the set collection because set does not holp 
console.log(setOfNumbers); // duplicates value, 7 is already exist.

console.log("============ check number of elements available into the set ===============");
console.log(setOfNumbers.size);

console.log("============ delete element from set  ===============");
setOfNumbers.delete(9);
console.log(setOfNumbers);
console.log(setOfNumbers.size);

console.log("============ Check is element available in set or not   ===============");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("============ traverse array using for...of loop ===============");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log("Remove duplicate elements from array using spread operator and set and add into new array");
let arrayNumbers = [2, 3, 4, 5, 6, 3, 5];
let arrayUniqueElements = [...new Set (arrayNumbers)] // it remove duplicate and into new array
console.log(arrayUniqueElements);

console.log("====== Remove Duplicate element of array using set and for loop=====");
let setArrayNumbers = new Set();
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    setArrayNumbers.add(element); // it will not add duplicates value 
}
    console.log(setArrayNumbers); // it will only original values