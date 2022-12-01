// function 1
function do_assignment(callback){
    console.log("I am doing assignment and it is done now.....");
    callback();
    
    // function 3
    return function(){
        console.log("Yahoooo... mai to Farmer ban gaya");
    }
}
                       
// function - 2

function copy_assignment (){
    console.log("hey bro ... Thank you. let me copy");
}

let returnfun = do_assignment(copy_assignment);
returnfun();