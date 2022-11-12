// swap assignment 

var myFriendName = "Jenny";
var yourFriendName = "Bill";

console.log("========= before swap ==========");
console.log(myFriendName, yourFriendName);

temp = myFriendName
myFriendName = yourFriendName;
yourFriendName = temp;

console.log("========= After Swap =========== ");
console.log(myFriendName, yourFriendName);

// swap three variable value [num1=100, num2=200, num3=300]
// 1st with 2nd, 2nd with 3rd and 3rd with 1st]

var num1= 100, num2=200, num3=300;
console.log("========== Before Swap ============ ");
console.log(num1, num2, num3);

console.log("========== After Swap ============");
temp = num1;
num1=num2;
num2=num3;
num3=temp;
console.log(num1, num2, num3);