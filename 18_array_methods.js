var arrayOfNumbers = [1, 3, 7, 8, 10, 9, 7, 3];

arrayOfNumbers[4] = 44;    // it update 4th index value 
console.log(arrayOfNumbers);

console.log(arrayOfNumbers.includes(7));// is this value available or not 
console.log(arrayOfNumbers.includes(10)); // because 10 not remain. 

console.log("====================== using for loop, traverse object ==========================");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log("====================== using for in loop, traverse object ==========================");
for (const key in arrayOfNumbers) {
        const element = arrayOfNumbers[key];
        console.log(element);
    }

    console.log("====================== Traverse array in reverse order ==========================");

    var totalNumbers = arrayOfNumbers.length - 1;
    for (let index = totalNumbers; index>=0; index--) {
        const element = arrayOfNumbers[index];
        console.log(element);
    }

    console.log("====================== log even position values ==========================");

    for (let index = 0; index <= arrayOfNumbers.length-1; index++) {
        const element = arrayOfNumbers[index];
        if (index%2==0) { 
            console.log(element);
        }
       
        
    }
    console.log("============ Add element starting in array  - unshift()  ===============");
    arrayOfNumbers.unshift(5) // unshift add element at starting
    console.log(arrayOfNumbers);
    arrayOfNumbers.unshift(45,78) // we can add multiple elements
    console.log(arrayOfNumbers);

    console.log("============ remove element starting in array  - shift()  ===============");

var array = [24, 56, 87, 90]
console.log("=========  before shift() ===========");
console.log(array);
console.log("========= after shift() ===========");
array.shift()
console.log(array); // here 24 is removed 

console.log("============  slice() ===============");
let arrayNumbers = [1, 5, 7, 8, 9, 10, 17, 19]
let slicedElements = arrayNumbers.slice(3) // return values from index 3
console.log(slicedElements);

let slicedEValues = arrayNumbers.slice(2,6)
console.log(slicedEValues); // it will return values between index 2 and 6














