var greet = "Good Morning";
console.log(greet);
var count = greet.length; // length gives total character count of string 
console.log(count);
console.log(greet.charAt(8)); // charAt() - it gives value of index

// indexOf()

var char = greet.indexOf("X") // "X" is not in string greet, when it unable to find, then it return -1.
console.log(char);

var char1 = greet.indexOf("o"); // it gives first occurrence of that character
console.log(char1);

var greeting = "Good Morning Udaysinh veer";
var greetingIndex = greeting.indexOf("Uday"); // when we pass word, it return first index of first 
console.log(greetingIndex);                   // character of this word 
