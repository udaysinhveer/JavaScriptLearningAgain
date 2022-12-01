// function - 1

function do_assignment(callback){
    console.log("I am doing assignment and it is done now.....");
    callback();
}
do_assignment(copy_assignment) // from here we pass function copy_assignment as a argument to do_assignment
                              
// function - 2

function copy_assignment (){
    console.log("hey bro ... Thank you. let me copy");
}

// function will call again and again after given time/ and function call after given time once 

function display(){
    console.log("display function");
}
//setInterval(display, 2000) // 2000 mean 2000 milli second,it will call fun again and again after 2 second
console.log("===================================================================");
setTimeout (display, 2000) // it will call function once after 2 second 

