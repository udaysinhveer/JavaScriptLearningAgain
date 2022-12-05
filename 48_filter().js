console.log("========== get element is greater than or equal to 4, using filter() =============");

const arrayOfNumbers =[0, 2, 3, 1,4,7,6,8,23]
let newArray = arrayOfNumbers.filter((element)=> {
    return element>=4;
})
console.log(newArray);


// filter() assignment

arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]

let greaterArray = arrayNumbers.filter((element)=>{
    return element>50;
});
console.log(`Elements are greater than 50 is : ${greaterArray}`);

// find all the even numbers
let EvenArray = arrayNumbers.filter((element)=>{
    return element%2==0;
});
console.log(`Even numbers is : ${EvenArray}`);

// odd Numbers
let oddArray = arrayNumbers.filter((element)=>{
    return element%2!=0;
});
console.log(`Odd numbers is : ${oddArray}`);

// find the number which are multiply by 5
let multiplyArray = arrayNumbers.filter((element)=>{
    return element%5==0;
});
console.log(`Elements are multiply by 5 are : ${multiplyArray}`);

// find number between 20 to 50
let betweenArray = arrayNumbers.filter((element)=>{
    return element>20 && element<50;
});
console.log(`Numbers between 20 to 50 are : ${betweenArray}`);








