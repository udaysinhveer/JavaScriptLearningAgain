// if statement/condition
rating = 3;
isAssignmentComplete = true;
if (rating>=3 && isAssignmentComplete==true) {

console.log("you are doing good, Excellent");
    
}

console.log("==================== Nested If (If statement inside if)============================");

var num1 = 50;
var num2 = 60;
if (num1<num2) {

    console.log(`value ${num2} is greater than value ${num1}`);

    if (num2%2==0) {
        console.log(`${num2} is EVEN`);
    }   
}