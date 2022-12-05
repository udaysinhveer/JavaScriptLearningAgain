const arrayOfNumbers = [2,3,5,4,6,1]

const newArray = arrayOfNumbers.map((element)=>{
    return element + 5;
});
console.log(arrayOfNumbers);
console.log(newArray);

//map() assignment
//1. add 10 into each element 
const array_numbers = [20,11,40,25,23,11,9,31,60,2,19]
const new_array_numbers = array_numbers.map((element)=>{
    return element+10
});
console.log(new_array_numbers);

//2.square the each array element and log on console

const array_square = array_numbers.map((element)=>{
    return element*element;
})
console.log(array_square);

//3.add the index value into its corresponding each array element and log new array result on console 

const array_index = array_numbers.map((element, index)=>{
    return element+index;
})
console.log(array_index);
