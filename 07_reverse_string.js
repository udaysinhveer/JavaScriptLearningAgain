console.log("================== Reverse String Using for.......loop ========================");

var myName = "Udaysinh";
var nameLength = myName.length-1;
var reverseString = "";
for (let index = nameLength; index >= 0; index--) {
    var nameCharAt = myName.charAt(index);
   reverseString = reverseString + nameCharAt; // here we store reverse character in string 

}
console.log(reverseString);

console.log("================== Addition Using for.......loop ========================");
// 0+1+2+3+4+5

var add = 0;
for (let index = 0; index <= 5; index++) {
    
var add = add + index // this store the addition, same like above we store reverse string character in one string 
    
}
console.log(`Addition of 0 to 5 is : ${add}`);





