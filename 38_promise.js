let is_notes_and_recording_available = true;
let promise = new Promise(function(resolve, reject ){
    if(is_notes_and_recording_available) {
        resolve("Sir shared notes and recordings !! ");
    } else{reject("Sir does not shared notes and recordings !!");
}
} );

promise.then(function(success){
    console.log(success);
}).catch(function(failure){
    console.log(failure);
}).finally(function(){
    console.log("Done....");
});