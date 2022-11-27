// to check number is prime or not 

function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
       if (numberToCheck%index==0) {
        return false;
       }
    }
    return true;

}
console.log(primeNumber(11));
console.log(primeNumber(9));
console.log(primeNumber(29));
console.log(primeNumber(16));





