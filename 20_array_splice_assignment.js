fruit_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
// log 1st and last value of array
console.log(`First Value : ${fruit_seasonal[0]}, last value : ${fruit_seasonal[fruit_seasonal.length-1]}`);

// add element before Banana
fruit_seasonal.splice(0,0,"Papaya")
console.log(fruit_seasonal);

// remove mango from the array
let mangoIndex = fruit_seasonal.indexOf("Mango");
fruit_seasonal.splice(mangoIndex,1) // it will remove element at mangoIndex
console.log(fruit_seasonal);

// add "Pineapple" at last position
fruit_seasonal.push("Pineapple");
console.log(fruit_seasonal);

// insert "Dragon Fruit" before "Water Melon"
let waterMelonIndex = fruit_seasonal.indexOf("Water Melon");
fruit_seasonal.splice(waterMelonIndex,0, "Dragon Fruit")
console.log(fruit_seasonal);

// "Orange" orange with "Kiwi"
let orangeIndex = fruit_seasonal.indexOf("Orange");
fruit_seasonal.splice(orangeIndex,1,"Kiwi");
console.log(fruit_seasonal);

// log the element from index 1 to 4
var count = 0;
var fruitlength = fruit_seasonal.length
for (let index = 1; index < fruitlength; index++) {
    count= count+1;
    console.log(fruit_seasonal[count]);
    if (count==4) {
        break;
    }
}


console.log("==========================================================================");
// only select 3 elements and log on console(use length property) 
var fruitlength = fruit_seasonal.length
var count = fruitlength-3;
for (let index = count; index < fruitlength; index++) {
    count= count+1;
    console.log(fruit_seasonal[index]);
}


console.log("============================================================================================");

const array_numbers = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`total elements available in array : ${array_numbers.length}`);
console.log(`first element : ${array_numbers[0]}, last element : ${array_numbers[array_numbers.length-1]}`);
console.log(`third last element is : ${array_numbers[array_numbers.length-3]}`);

// log element last to first 
let arrayIndex = array_numbers.length-1

for (let index = arrayIndex ; index >= 0; index--) {
    const element = array_numbers[index];
    console.log(element);
}
console.log("================================= Even Numbers =================================");
// find all even numbers 
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%2==0) {
        console.log(element);
    }
    
}

console.log("================================= Odd Numbers =================================");
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%2!=0) {
        console.log(element);
    } 
}

console.log("==================== Even positioned elements =========================");

var indexoffElements = array_numbers.length-1;
for (let index = 0; index <= indexoffElements; index++) {
    const element = array_numbers[index];
    if (index%2==0) {
        console.log(element);
    }
}

console.log("==================== Odd positioned elements =========================");
var indexoffElements = array_numbers.length-1;
for (let index = 0; index <= indexoffElements; index++) {
    const element = array_numbers[index];
    if (index%2!=0) {
        console.log(element);
    }
}

console.log("================= sum of all elements ============================");
var sumoff = 0;
var indexoffElements = array_numbers.length-1;
for (let index = 0; index <=indexoffElements; index++) {
    const element = array_numbers[index];
    sumoff = sumoff+element;
}
console.log(sumoff);

console.log("================= find number multiply by 5 ============================");

var indexoffElements = array_numbers.length-1;
for (let index = 0; index <= indexoffElements; index++) {
    const element = array_numbers[index];
    if (element%5==0) {
        console.log(element);
    }
}
console.log("================= Is element available in array (includes()) ==================");

console.log(`115 is available in array : ${array_numbers.includes(115)}`);
console.log(`23 is available in array : ${array_numbers.includes(23)}`);