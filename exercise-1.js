///// Exercise-1: Getting started!

// Create a function called delay that takes a number of milliseconds, and returns a Promise that will be resolved with no value after the requested delay has passed.
// Use your delay function to print messages "ONE", "TWO", "THREE", "...LIFTOFF!" to the console with a 1 second delay between each message

var Promise = require('bluebird');


function delay(duration){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    })
}

delay(1000).then(function(){
    console.log("ONE");
    return delay(1000)
}).then(function(){
    console.log("TWO");
    return delay(1000)
}).then(function(){
    console.log("THREE");
    return delay(1000)
}).then(function(){
    console.log("...LIFTOFF!");
});
    
//// Shorter version, with integration of countdown into the initial function.

function delayLogging(duration, countdown){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(countdown);
            resolve();
        }, duration);
    })
}

delayLogging(1000, "ONE").then(function(){
    return delayLogging(1000, "TWO")
}).then(function(){
    return delayLogging(1000, "THREE")
}).then(function(){
    return delayLogging(1000, "...LIFTOFF!")
});

