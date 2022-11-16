// print 1 to 10 using for loop

for (let index = 1; index <=10; index++) {
    console.log(index);
}

// print 0, 2, 4,......10

for (let index = 0; index <=10; index= index+2) {
          console.log(index);

}

// print 50 to 40

for (let index = 50; index >=40; index--) {
    console.log(index);
    
}

// WAP to print 1st 15 odd numbers

for (let index = 1; index <= 30; index = index+2) {
  console.log(index);
    
}

console.log("=================================================================================");
// WAP to print 1st 15 odd numbers (Using If condition)
for (let index = 1; index <=30; index++) {
    if (index%2!=0) {
        console.log(index);
    }
    
}

console.log("====================== Print 1st 43 EVen Numbers =========================");
// WAP to find 1st 43 Even numbers
// here we add array length 100000 because we don't know where exactly first 43 Even numbers count will complete.  

var evenCount = 0;
for (let index = 0; index < 100000; index++) {
    if (index % 2 == 0) {
        console.log(index);
        evenCount = evenCount + 1; // this will count first the even numbers 
        if (evenCount == 43) {
            break; // this will break loop when count will reach to 43
        }
    }
}


