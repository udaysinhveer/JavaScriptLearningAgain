// nested object mean - object inside object

let uday = {                           

    fullName : "Udaysinh Veer",          
    city : "Pune",
    age : 23,
   isMarried : true,
   address : {       

    street: "ABC road",
    city: "Pune", 
    pinCode: 411030,
    state : "Maharashtra",
    },

    eat:function () {                          // here we add eat function to uday object using eat key 
        console.log("i am a vegetarian ");
    },
    details: function(){
        console.log(this.fullName);  // this keyword indicate that this define only current property
    }
   }      
       uday.details()
       uday.eat()  // here we call invoke eat function 
       console.table(uday);