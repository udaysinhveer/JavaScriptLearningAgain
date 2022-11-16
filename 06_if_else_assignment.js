// find values are even or odd using function and if.....else(45,70,67,98)

function evenOddFunction(arg1) {

   if (arg1%2==0) {
        console.log(`value "${arg1}" is "EVEN"`);
    }else{
        console.log(`value "${arg1}" is "ODD"`);
    }

    
}
evenOddFunction(45);
evenOddFunction(70);
evenOddFunction(67);
evenOddFunction(98);

console.log("============ Check person eligibility for voting ==========");


function votingEligibility (age, name){
if (age>=18) {
    console.log(`"${name}" you are eligible for vote`);
} else{
    console.log(`"${name}" you are not eligible for vote`);
}

}
votingEligibility(18, "Uday");
votingEligibility(20, "Nikhil");
votingEligibility(17, "Nikita");
votingEligibility(40, "Suraj");


console.log("============ String contain more than 10 character or not ===========");

function stringCheck(string1){
var stringLength = string1.length;
if (stringLength>10) {
    console.log(`String "${string1}" Contain more than 10 Characters`);
} else{
    console.log(`String "${string1}" does Not Contain more than 10 Characters`);
}

}
stringCheck("JavaScript - ES6")


console.log("============ Check string start with java or not  ===========");

function stringStarts(string2){
    var stringLength1 = string2.startsWith("Java")
    if (stringLength1==true) {
        console.log(`String "${string2}" Starts with "Java"`);
    } else{
        console.log(`String "${string2}" does Not Starts with "Java" `);
    }
    
    }
    stringStarts("JavaScript Language");
    



