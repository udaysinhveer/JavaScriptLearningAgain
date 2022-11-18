
console.log("=============== WA FE to sum all numbers from 1 to 10 ================");

var sumOfAll = function(arg){
    var sumOf = arg;
    for (let index = 0; index <= 10; index++) {
        sumOf = sumOf+index;
    }
    console.log(`sum of 0 to 10 numbers is : ${sumOf}`);

}
sumOfAll(0)
    

console.log("=============== WA FE to sum of square numbers 1 to 5 ================");
function sumOf_SquareOf_Number() {
    var square = 1;
    var addition = 0;
    for (let index = 0; index <=5; index++) {
     square = index*index;
     addition = addition+square;
    }
    console.log(`sum of square numbers 1 to 5 = ${addition}`);
}
sumOf_SquareOf_Number();