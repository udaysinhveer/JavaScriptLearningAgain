
let arrayOfNumbers = [ 34, 5, 68, 1, 34, 90,56];

let newArray = arrayOfNumbers.reduce((value, runningTotal)=>{
    return value + runningTotal;
},100,) // if we add 100 here it will count 100 as a value first and after that it will count 34, 5,...

console.log(newArray);

// reduce method assignment

arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]

let sumArray = arrayNumbers.reduce((value, totalValue)=>{
    return value+totalValue;
});
console.log(`Sum of array "arrayNumbers" is : ${sumArray}`);

// find the sum of all even numbers

let sumEven = arrayNumbers.filter((element)=>{
    return element%2==0;
});
let totalEvenSum = sumEven.reduce((value, currentTotal)=>{
    return value + currentTotal;
});
console.log(`Total sum of all even numbers in array is : ${totalEvenSum}`);