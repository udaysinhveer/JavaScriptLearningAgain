
function stringTemplateAssignment(myHobby1, myHobby2, myHobby3){
    // my dream company
var myDreamCompany = "Google";
console.log(`my dream company is : ${myDreamCompany}`);

console.log(`My hobbies are : ${myHobby1}`);
console.log(`My hobbies are : ${myHobby2}`);
console.log(`My hobbies are : ${myHobby3}`);
// concat hobbies 
var concatHobbies = myHobby1.concat(","," ", myHobby2).concat( ","," ",myHobby3) // added space and ","
console.log(`My HObbies are : ${concatHobbies}`);

}
stringTemplateAssignment("Playing Cricket","reading books","Watching news")

console.log("==============================================================================================");

var stringHandsOn = function(givenString){

    console.log(`1.Print string as it on console : ${givenString}`);
    console.log(`2.length of string : ${givenString.length}`);
    // remove extra spaces 
    var removeExtraSpaces = givenString.trim();
    console.log(`3.string after trim : ${removeExtraSpaces}`);
    console.log(`4.total number of extra spaces remved : ${givenString.length-removeExtraSpaces.length}`);
    console.log(`5.First Character is : ${removeExtraSpaces.charAt(0)}, last character is : ${removeExtraSpaces.charAt(removeExtraSpaces.length-1)}`);
    var totalWords = removeExtraSpaces.split(" ")
    console.log(`6.total words available in the string is : ${totalWords.length}`);
    console.log(`7.index of word "good" is : ${removeExtraSpaces.indexOf("good")}`);
    console.log(`8. print string form index 22 Using "Substring" = ${removeExtraSpaces.substring(22)}`);
    console.log(`9. print string form index 22 Using "slice" = ${removeExtraSpaces.slice(22)}`);
    console.log(`10. string ends with word "up" : ${removeExtraSpaces.endsWith("up")}`);
    console.log(`10. string starts with word "Hey" : ${removeExtraSpaces.startsWith("Hey")}`);


}
stringHandsOn("       Hey you are doing good, keep it up         ");










