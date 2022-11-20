console.log("============================ Print 5...6..7..15 using while loop ========================= ");
var num =5;
while (num <=15) {
    console.log(num);
    num++;
}
console.log("==================== Print 5...6..7..15 using do while loop ================== ");
var num = 5;
do {
    console.log(num);
    num++;
} while (num <=15);

console.log("============================ 50 to 40 using while loop ========================= ");
var count = 50;
while (count>=40) {
    console.log(count);
    count--;
}
console.log("============================ 50 to 40 using do while loop ========================= ");
var count = 50;
do {
    console.log(count);
    count--;
} while (count>=40);

console.log("=============== find 1st 15 odd numbers using while loop ================== ");

var count = 0;
var totalCount = 0;
while (count<=1000) {
    if (count%2!=0) {
        console.log(count);
        totalCount = totalCount+1;
    }   
    count++; 
      if (totalCount==15) {
         break;
}
}

console.log("=============== find 1st 15 odd numbers using do while loop ================== ");
var count = 0;
var totalCount = 0;
do {
    if (count%2!=0) {
        console.log(count);
        totalCount= totalCount+1;
    }
     count++;
    
     if (totalCount==15) {
        break;
     }
} while (count<=1000);



console.log("=============== find 1st 10 even numbers using while loop ================== ");

var count = 0;
var totalCount = 0;
while (count<=1000) {
    if (count%2==0) {
        console.log(count);
        totalCount = totalCount+1;
    }   
    count++; 
      if (totalCount==10) {
         break;
}
}


console.log("=============== find 1st 10 even numbers using do while loop ================== ");
var count = 0;
var totalCount = 0;
do {
    if (count%2==0) {
        console.log(count);
        totalCount= totalCount+1;
    }
     count++;
    
     if (totalCount==10) {
        break;
     }
} while (count<=1000);

console.log("=============== print table of 5...10..15..50 using while loop ================== ");
var count =5;
while (count<=50) {
    console.log(count);
    count = count + 5;
} 

console.log("=============== print table of 5...10..15..50 using do while loop ================== ");
var count = 5;
do {
    console.log(count);
    count = count +5;
} while (count<=50);


console.log("============= print reverse table of 100...90..80..70 using do while loop ============== ");
var count = 100;
do {
    console.log(count);
    count = count - 10;
    
} while (count>=10);