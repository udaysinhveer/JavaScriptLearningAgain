class Bank {
    constructor(bankName, location, accountNO, IFSC, interestRate){
         this.bankName= bankName
         this.location = location
         this.accountNO = accountNO
         this.IFSC = IFSC
         this.interestRate = interestRate
    }
}
let axisBank = new Bank ("Axis Bank", "Pune", 93703438, "AXIS12343", "7.8%")
let SbiBank = new Bank ("State Bank Of india", "Mumbai", 38740504, "SBIN12343", "9%")
let IciciBank = new Bank ("ICICI Bank", "Karmala", 123412, "ICICI7254", "12%")
let kotakBank = new Bank ("Kotak Mahindra Bank", "solapur", 788824, "KOTAK12343", "6%")
let PunjabBank = new Bank ("Punjab National Bank", "Surat", 837997, "PUNJAB12343", "8.2%")

let AllBankDetails = [axisBank, SbiBank, IciciBank, kotakBank, PunjabBank]

for (let index = 0; index < AllBankDetails.length; index++) {
    const element = AllBankDetails[index];
    console.log(`${element.bankName} - ${element.location}`);
}

console.log("================== Bank and IFSC codes ========================");
// for of loop
for (const bank of AllBankDetails) {
    console.log(`${bank.bankName} - ${bank.IFSC}`);
}