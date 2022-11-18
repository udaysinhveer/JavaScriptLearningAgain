console.log("============================ break ==================================");
// break
for (let index = 0; index < 10; index++) {
  if (index==5) {         //if index ==5, then break will terminate all next program.
    break;
  }
  console.log(index);
}

console.log("============================ Continue ==================================");
// Continue
for (let index = 0; index <= 10; index++) {

  if (index==5) {        // continue skip only true condition statement and... next it continue execution 
    continue;            // here 5 terminated, and after that execution remain same as before 
  }
  console.log(index);
}