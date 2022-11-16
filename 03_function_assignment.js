// function 1st 

function udayWork() {
    console.log("i am udaysinh veer");
    console.log("i am bachelor of arts student");
}
udayWork()
console.log("=====================================================================");
// 2nd function

function veerWork() {

console.log("we are veer marathas");
console.log("our king was great chhatrapati shivaji maharaj");

} 
veerWork()

console.log("=====================================================================");

//concat name function 
function our_names (firstName, lastName){

    var concateNames = firstName+lastName;
    console.log(concateNames);
}
our_names("Udaysinh ", "veer");

console.log("=====================================================================");
// swap value function

function swap_values(arg1, arg2){
    console.log("========== Before swap ==========");
    console.log(arg1, arg2);

    console.log("========== After swap ==========");
    var temp = arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1, arg2);

}
swap_values("virat", "Anushka")
swap_values("1000", "2000") // same work using one function, this is called code reusability


console.log("=====================================================================");
// WAF with 3 arg and it should return the addition

function add_three_numbers(arg1, arg2, arg3) {

var valueAddition = arg1+arg2+arg3;
return valueAddition;

}
var functionValueAddition =  add_three_numbers(10.23, 600, 40)
var stringAddition = add_three_numbers("Hello ", "Good ", "Morning")
console.log(`Addition of three numbers is : ${functionValueAddition}`);
console.log(stringAddition);
