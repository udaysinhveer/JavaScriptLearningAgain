console.log("============= Normal Function - with no arguments ================");

function display() {
    console.log("Hello");
}
display()

console.log("============= Arrow Function - with no arguments ================");

let  show = () => {
    console.log("Hello Uday");
}
show()

console.log("============= Function Expression - with arguments ================");

let add = function(n1, n2){
return n1+n2;
}
console.log(add(10,20));


console.log("============= Arrow Function - with arguments ================");

let sum = (n1, n2)=>{
    return n1+n2;
}
console.log(sum(10,20));

console.log("======================== one line arrow function ===========================");
// instead of writing this multi line arrow function we can write arrow function in one line like sum1.

let sum1 = (n1, n2)=> n1+n2
console.log(sum1(30,20));
