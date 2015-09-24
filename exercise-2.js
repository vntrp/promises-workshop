//////// Exercise 2 - Look at all these Chars!

// Create a function called getFirstChar that takes a string, and returns a Promise that will be resolved with the first character of the passed string,
// after 500 milliseconds. You may use the delay function from the previous exercise.

// Create a function called getLastChar that takes a string, and returns a Promise that will be resolved with the last character of the passed string,
// after 500 milliseconds. You may use the delay function from the previous exercise.

// Create a function called getFirstAndLastCharSeq that takes a string, and returns a Promise that will be resolved with the first and last character
// of the passed string. This function should use getFirstChar and getLastChar in sequence.

// Create a function called getFirstAndLastCharParallel that takes a string, and returns a Promise that will be resolved with the first and last character
// of the passed string. This function should use getFirstChar and getLastChar in parallel, using the Promise.join functionality of the Bluebird library.

var Promise=require('bluebird');

function getFirstChar(someString){
    return new Promise(function(fullfill){
        setTimeout(function(){
            console.log(someString.charAt(0))
            fullfill();
        }, 500)
    })
}

getFirstChar("holaquetal");


function getLastChar(someString){
    return new Promise(function(fullfill){
        setTimeout(function(){
            console.log(someString.charAt((someString.length)-1))
            fullfill();
        }, 500)
    })
}

getLastChar("holaquetal");


/////////////////////////////
// correction:
/////////////////////////////


function delay(duration){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    })
};

function getLastCharCorrect(aString){
    return delay(500).then(
        function(){
            return aString[aString.length - 1];     // we want to RETURN a value, not console log it. Otherwise, we can't use it afterwards.
        });
};

getLastCharCorrect("hello").then(
    function(lastChar){
        console.log(lastChar)
    });


function getFirstAndLastCharSeq(aString){
    var firstChar;
    return getFirstChar(aString).then(
        function(_firstChar){
            firstChar=_firstChar;
            return getLastCharCorrect(aString);
            
        }).then(
            function(lastChar){
                return firstChar+lastChar;
            })
}

getFirstAndLastCharSeq("hello").then(
    function(firstLast){
        console.log(firstLast);
    });