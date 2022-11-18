// console.log("=================== Print Character at Even Position =========================");
// var givenString = "I love javaScript";
// for (let index = 0; index <givenString.length; index++) {
//     if (index%2==0) {     // using this condition we will get character at EVEN index position 
//         var stringCharAt =  givenString.charAt(index);
//     console.log(stringCharAt);
//     }

// }




console.log("========================== Even Position Character  ============================");
// do not consider spaces 
function evenPositionChar(arg) {
    for (let index = 0; index <arg.length; index++) {
        var char = arg.charAt(index)
        if (index%2 == 0 && char!=" ") {
            console.log(char);
        }        
}
}
evenPositionChar("Hard work always pay back");
evenPositionChar("Soon i will be Angular IT Champ");



console.log("=========================== Odd Position Character ================================");

function evenPositionChar (arg) {

    for (let index = 0; index < arg.length; index++) {
      var char = arg.charAt(index);
      if (index%2!=0 && char!=" ") {
        console.log(char);
      }  
    }
}  
evenPositionChar ("Hard work always pay back");
evenPositionChar ("Soon i will be Angular IT Champ");