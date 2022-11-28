const bankSbi = {
bankName : "SBI",
bankPerformance : "Excellent",
bankNetAssets: 4000000,
bankWorkMode : "Online"

}

const bankLocation = {
    street : "AM college road",
    city : "Pune",
    PinCode : "411028",
}

// clone using assign operator 

let bankSbiDetails = Object.assign({}, bankSbi, bankLocation)
console.log(bankSbiDetails);

// clone using spread operator



console.log("=============================================================================");

const rateOfInterest = {
    homeLoanInterest : 7.8,
    personalLoanInterest : 9,
    dueInterest : 10,

}

let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails);