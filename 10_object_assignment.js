let teacher = {
name: "ABC guruji",
education: "master in computer science",
homeTown: "pune",
subject : "computer science",
age : 25,
Degrees : {                                           // nested object
    engineering : "COEP pune",
    phd : "Kholhapur University",
    advance_computing : "solapur University ",

    certificates : {                                  // nested object inside nested object 
        hackar_rank_participation : "first rank",
        certificateIFE : "A grade",
    advanceProgramingCertificate : "third class",
    },
concateDegrees : function() {
    return `Teacher total degrees are : ${this.engineering.concat(", ",this.phd).concat (", ",this.advance_computing)}`;
}
      }

    }
    console.log(teacher.Degrees.concateDegrees()); // concat and print all degrees

// add new property 
teacher.mobileNo = 7888250969;
console.log(teacher.mobileNo);

// modify existing property 

teacher.Degrees.certificates.hackar_rank_participation = "second rank";
console.table(teacher.Degrees.certificates);

// delete certificate from nested object 
   delete teacher.Degrees.certificates.advanceProgramingCertificate;
   console.table(teacher.Degrees.certificates);

//Add new certificate in nested certificate object 
 teacher.Degrees.certificates.mscit = "World Computer Karmala";
   console.table(teacher.Degrees.certificates);

