console.log("=================== Print vowels from given string  =========================");

var givenString = "I love javaScript";
var count = 0;
var ovwelsSequence = "";
var stringLowerCase = givenString.toLowerCase();
for (let index = 0; index < stringLowerCase.length; index++) {
    var char = stringLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        ovwelsSequence = ovwelsSequence + char;
        count = count + 1;

    }
}
console.log(`vowels of given string : ${ovwelsSequence}`);
console.log(`Total ovwels in given string : ${count}`);


console.log("================= Print vowels from given string Using includes()  ================");


function countOvwels (myString) {

    var stringUpperCase = myString.toUpperCase();
    var myovwels = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < stringUpperCase.length; index++) {
        var char = stringUpperCase.charAt(index);
        var isAvailable = myovwels.includes(char);  // here we use "includes" method 
    
     if (isAvailable) {    // here we can write "isAvailable == true"
        vowelsCount = vowelsCount+1;
     }   
    }
    console.log(`total ovwels in string : ${vowelsCount}`);
}
   countOvwels("Good Morning IT Champ");
   countOvwels("I love javaScript so much");


