// print 1 to 5
var count = 0;
while (count <=5) {
    console.log(count);
    count++;
} 

console.log("============ Print 10 to 0 in while loop ===============");

var count = 10;
while (count>=0) {
    console.log(count);
    count--;
}

console.log("============ Print 5...10..15 to 50 in while loop ===============");
var count = 5;  // initialization
while (count<=50) {  // condition
    console.log(count);
    count = count+5;   // update 
}