console.log("========== Function Expression and Ternary Operator to check TCS interview Criteria =========");
var tcsEligibilityCheck = function(gradScore, hscScore, sscScore, candidateName){


    var tcsResult = gradScore>=70||hscScore>=80||sscScore>90?
 `Congrats "${candidateName}" you are eligible for TCS interview`: 
`"${candidateName}" Unfortunately you are not eligible for TCS interview`;

console.log(tcsResult);

}
tcsEligibilityCheck(80,86,90,"Udaysinh Veer");
tcsEligibilityCheck(69,65,55,"Amit Barkund");
tcsEligibilityCheck(80,86,90,"Nikhil Sabale");

console.log("============ Check marriage eligibility for boys ===============");


function boysMarriageCheck(age, gender, name){
    var boyMarriageResult = gender =="Male" && age>=21
? `Hey "${name}" you are eligible for marriage` 
: `"${name}" you are not eligible for marriage`;
console.log(boyMarriageResult);

}
boysMarriageCheck(23, "Male", "Uday")
boysMarriageCheck(18, "Male", "Amit")
boysMarriageCheck(26, "Male", "Nikhil")


console.log("============ Check marriage eligibility for girls ===============");

var girlsMarriageCheck = function(girlAge, girlGender, girlName){

        var girlMarriageResult = girlGender =="Female" && girlAge>=18
    ? `Hey "${girlName}" you are eligible for marriage` 
    : `"${girlName}" you are not eligible for marriage`;

return girlMarriageResult;

}
console.log(girlsMarriageCheck(17, "Female", "Nikita"));
console.log(girlsMarriageCheck(18, "Female", "Pooja"));
console.log(girlsMarriageCheck(22, "Female", "Ankita"));












