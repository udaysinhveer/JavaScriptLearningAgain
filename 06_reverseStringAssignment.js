console.log("=============================== Reverse String ===================================");

function reverseStringFun (arg) {
    var argIndexValue = arg.length - 1;
    reverseString ="";
    for (let index = argIndexValue; index >=0; index--) {
        stringCharAt = arg.charAt(index);
        reverseString = reverseString + stringCharAt;

        
    }
    console.log(reverseString);
}
reverseStringFun ("Hard work always pay back")
reverseStringFun ("Soon i will be a angular IT champ")