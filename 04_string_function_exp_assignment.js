console.log("========= Function Expression to find string length ==========");

var wordLengthSquare = function(word){

    var wordLength = word.length;
    var wordSquare = wordLength*wordLength;
    return wordSquare;

} 
console.log(wordLengthSquare("JavaScript"));
console.log(wordLengthSquare("Google"));
console.log(wordLengthSquare("Developer"));


console.log("===========================================================");

function StringFunction () {

    var givenString = "I am a angular Developer";
    var lengthOfString = givenString.length;
    var SplitString = givenString.split(" ");
    var totalWords = SplitString.length;
    var result = lengthOfString/totalWords;
    var result2 = lengthOfString*totalWords;
    console.log(`String length divided by string words : ${result}`);
    console.log(`String length multiply by string words : ${result2}`);
    
}
StringFunction ();