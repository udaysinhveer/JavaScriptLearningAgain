// forEach loop
// traverse array using forEach loop, 
// in forEach loop we pass function as a argument

const arrayNumbers = [10, 20, 30, 40, 20, 10];
arrayNumbers.forEach(function(currentValue, index, array){
     console.log(currentValue,index,array);
})

// traverse array using forEach loop and arrow function

arrayNumbers.forEach(currentValue=>console.log(currentValue))   // index and array is optional

console.log("=========== Traversing set using forEach() ============");

const setOfNumbers = new Set(arrayNumbers);
setOfNumbers.forEach((value)=>{
     console.log(value);
})

console.log("============= Traversing map using forEach() ============== ");
let learnmap = new Map();

learnmap.set(22, "Sachin");
learnmap.set(11, "Dravid");
learnmap.set(33, "Gaungully");
learnmap.set(77, "Sachin");
learnmap.set(11, "Rahul");
learnmap.forEach((key, value)=>{
     console.log(key, value);
});