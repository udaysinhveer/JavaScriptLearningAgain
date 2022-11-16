console.log("============= WAP to print 5 to 15 by incrementing 1 ====================== ");
for (let index = 5; index <=15; index++) {
 console.log(index);
    
}
console.log("============= WAP to print 50 to 40 by decrementing  1 ====================== ");
for (let index = 50; index >= 40; index--) {
    console.log(index);
}

console.log("============= WAP to print first 15 odd numbers  ====================== ");
var firstOdd = 0;
for (let index = 1; index < 100000000; index++) {
    if (index%2!=0) {
    console.log(index);
    firstOdd= firstOdd+1;
    }
    if (firstOdd==15) {
        break;
    }
}

console.log("============= WAP to print first 10 Even numbers  ====================== ");
var firstEven = 0;
for (let index = 0; index < 100000000; index++) {
    if (index%2==0) {
    console.log(index);
    firstEven= firstEven+1;
    }
    if (firstEven==10) {
        break;
    }
}

console.log("============= WAP to print 5, 10,.....50 ====================== ");

for (let index = 5; index <=50; index = index +5) {
   console.log(index);
}

console.log("============= WAP to print 10, 20,.....100 ====================== ");
for (let index = 10; index <=100; index = index +10) {
    console.log(index);
 }
 



