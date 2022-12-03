// rest operator - in rest operator we use spread operator as a function argument.

function display(name, city, ...otherDetails){  // here we use spread operator to print multiple value..
    console.log(name,city,otherDetails);         // in a one argument
}
display("Uday", "karmala", 23, "Political Science")


console.log("=====================================================================");

function display(...otherDetails){  // we can assign all details in one arg using rest operator
    console.log(otherDetails);     // rest operator must be at last or only one   
}

display("Uday", "karmala", 23, "Political Science")

