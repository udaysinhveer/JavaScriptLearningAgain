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


console.log("================================== Concat =============================================");

// concat string 

var fName = "Virat";
var lName = "Kholi";
var result = fName.concat(" ",lName) // here we add one empty string for space in output between two words 
console.log(result);


console.log("====================================== Replace =========================================");
// replace 

var replaceGreet = "Good Morning bro and sis";
var replaceDemo = replaceGreet.replace("Morning", "Evening")
console.log(replaceDemo);

console.log("======================= toUpperCase and toLowerCase ==========================");

console.log(replaceDemo.toUpperCase()); // Upper case 
console.log(replaceDemo.toLowerCase()); // lower case 

console.log("======================= trim() ==========================");
// trim removes starting and ending extra spaces of string

var greet = "        Good Morning bro and sis          ";
console.log(`before trim, length of string: ${greet.length}`);
var afterTrim =  greet.trim();
console.log(`After trim, length of string: ${afterTrim.length}`);

// how many extra spaces removed 
console.log(`total removed extra spaces from the string: ${greet.length-afterTrim.length}`); // total removed char 

console.log("======================= includes() ==========================");
// includes return boolean value 
// search() method is similar to includes() method 

var greet = "Good Morning bro and sis";
console.log(greet.includes("bro")); // it gives true result because "bro" is available in greet string
console.log(greet.includes("Bro")); // it gives false result because "Bro" is not available in greet string

console.log("======================= substring() ==========================");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8)); // it print char from index 8 
console.log(greet.substring(13,17)); // it print char between index 13 to 17

console.log("======================= slice() ==========================");
console.log(greet.slice(13));
console.log(greet.slice(13,17));

console.log("======================= split() ==========================");

var studentList = "Uday, Nikita, pooja, anjali, jenny";
var splitResult = studentList.split(",");  // "," means which separator we use to split 
console.log(splitResult);

console.log("======================= string template  ==========================");

var impQuote =  "Do or die this attitude is important for this training "; // here we cannot add "" in ""
var impQuote =  `"Do or die" this attitude is important for this training `; // using `` backtick we add ""
console.log(impQuote); // this is called string template 
