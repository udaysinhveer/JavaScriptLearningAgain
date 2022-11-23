
let myName = {
Name: "Udaysinh Veer",
Occupation : "Student",
Education : "arts gradate"
}

let YourName = myName;
YourName.Education = "Science graduate";
console.log(YourName.Education);
console.log("============================================================");
console.log(myName.Education);

// here myName.Education value not remain like arts student, it returns science graduate,
// because in shallow copy both refers the same data. 
//to solve this problem, we use spread operator (...)