const array_nums = [20, 3, 4, 56, 90, 400, 49]
// perform shallow clone on array
let array_nums1 = array_nums;
console.log(array_nums1);
array_nums1.push(55, 66)

// after adding value
console.log(array_nums);
console.log(array_nums1);

console.log("================================== deep copy ====================================");

let array_nums2 = [...array_nums];
array_nums.push(10,25)
console.log(array_nums);
console.log(array_nums2);

console.log("============ Merge array using spread operator  ============");

let array_even = [2, 30, 14, 8]
let mergeArray = [...array_even, ...array_nums]
console.log(mergeArray);



console.log("===========================================================================================");

const employee_info = {
emp_id: 27,
emp_name : "Jone Doe",
salary : {
    july_month : "400000INR",
    aug_month : "500000INR",
    jun_month : "650000INR"
},
address : {
    locality: {
        colony : "OM Vrindhavan Society",
        street : "kanch pokli, 431202",
    },
    city : "Mumbai",
    state : "Maharashtra",
    country : "India"
},
mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]

}

console.table(employee_info.salary);
console.table(employee_info.address.locality);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);

console.log(`employee mobile numbers are : ${employee_info.mobiles}`);

console.log(" ======================= perform deep cloning using ...operator ====================");

let mydetails = {...employee_info};

mydetails.address.locality.street = "sounde-shelgaon road";
mydetails.mobiles[0] = "+91 7888250969";

console.log("====== original values after deep cloning using ...operator  ==========");
console.log(employee_info.address.locality.street);
console.log(employee_info.mobiles);

console.log("====== updated values after deep cloning using ...operator  ==========");
console.log(mydetails.address.locality.street);
console.log(mydetails.mobiles);

// here both values will be same because using spread operator not work if object is nested




console.log(" ======================= perform deep cloning using JSON.stringfy() ====================");

let mydetails1 =JSON.parse(JSON.stringify(employee_info))

mydetails1.salary.july_month = "80000INR";
mydetails1.address.country = "United Kingdom";

console.log("====== original values after deep cloning using JSON.stringfy() ==========");
console.log(employee_info.salary.july_month );
console.log(employee_info.address.country);

console.log("====== updated values after deep cloning using JSON.stringfy() ==========");
console.log(mydetails1.salary.july_month);
console.log(mydetails1.address.country);


