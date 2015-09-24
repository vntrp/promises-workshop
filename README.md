# Promises Workshop
*We promise it won't hurt (too much)*

## Basic instructions
* Fork this repository and create a new Cloud9 project by cloning your fork
* Each exercise should be done in a separate branch, **branched off of master**, with a descriptive name of your choice
* Completed exercises should be submitted as pull requests. The pull request name should be "Exercise #: " followed by the exercise's title
* All the exercises require the [`bluebird`](https://github.com/petkaantonov/bluebird/) NPM package. A `package.json` file is already initialized in this repo with this dependency. You'll have to do an `npm install` upon cloning in order to get all the dependencies.
* Different exercises may also require different NPM packages. This will require you to use `npm install --save` to get these packages. The `package.json` should be part of the same commit where you start using the required package(s). For example, if one of the exercises requires the use of the [`request`](https://github.com/request/request) library, then the `package.json` for that submission should contain the dependency, and it should be committed at the same time as the `exercise-#.js` that `require`s it.

## Exercise 1: Getting started!
* Create a function called `delay` that takes a number of milliseconds, and returns a `Promise` that will be resolved with no value after the requested delay has passed.
* Use your delay function to print messages "ONE", "TWO", "THREE", "...LIFTOFF!" to the console with a 1 second delay between each message
* Hint: your `delay` function will use `new Promise` to create a `Promise`

## Exercise 2
* Create a function called `getFirstChar` that takes a string, and returns a `Promise` that will be resolved with the first character of the passed string, **after 500 milliseconds**. You may use the `delay` function from the previous exercise.
* Create a function called `getLastChar` that takes a string, and returns a `Promise` that will be resolved with the last character of the passed string, **after 500 milliseconds**. You may use the `delay` function from the previous exercise.
* Create a function called `getFirstAndLastCharSeq` that takes a string, and returns a `Promise` that will be resolved with the first and last character of the passed string. This function should use `getFirstChar` and `getLastChar` **in sequence**.
* Create a function called `getFirstAndLastCharParallel` that takes a string, and returns a `Promise` that will be resolved with the first and last character of the passed string. This function should use `getFirstChar` and `getLastChar` **in parallel**, using the [`Promise.join`](https://github.com/petkaantonov/bluebird/blob/master/API.md#promisejoinpromisethenablevalue-promises-function-handler---promise) functionality of the Bluebird library.

## Exercise 3
After [`promisify`ing](https://github.com/petkaantonov/bluebird/blob/master/API.md#promisification) the [`request`](https://github.com/request/request) and [`prompt`](https://github.com/flatiron/prompt) libraries, rewrite the ["ISS Augmented"](https://github.com/DecodeMTL/node-workshop#augmenting-our-application) exercise using `Promise`s!

## Exercise 4
Create a program that will do the following, using `Promise`s:
* Prompt the user for an english word of their choice
* Using [Big Huge Thesaurus](), go fetch the synonyms for the entered word
* Display the synonyms of that word to the user in a nice way
* For brownie points, use the [`colors`](https://www.npmjs.com/package/colors) library to get some colors in there!

## Exercise 5
Create a program that will do the following, using `Promise`s:
* Read the [WordNik API Documentation](http://developer.wordnik.com/docs.html), especially the "words" section
* Retrieve a list of 5 random words
* Using the [Big Huge Thesaurus](https://words.bighugelabs.com/api.php) API, go fetch synonyms for each of these words
* Display the synonyms for each word to the user in a nice way
* For brownie points, use the [`colors`](https://www.npmjs.com/package/colors) library to get some colors in there!

## Exercise 6
Create a program that will do the following, using `Promise`s:
* Read the [WordNik API Documentation](http://developer.wordnik.com/docs.html), especially the "words" section
* Retrieve a list of 2 random **nouns**, 2 random **verbs** and 2 random **adjectives**
* Using the [Big Huge Thesaurus](https://words.bighugelabs.com/api.php) API, go fetch synonyms for each of these words
* Display the synonyms for each word to the user in a nice way, using [Automattic's `cli-table`](https://github.com/Automattic/cli-table) module
* For brownie points, use the [`colors`](https://www.npmjs.com/package/colors) library to get some colors in there!

## Exercise 7
* Register for a [forecast.io](https://developer.forecast.io/) developer account to get an API key, and read the docs!
* Prompt the user for their location
* Using [Google's Geolocation API](https://developers.google.com/maps/documentation/geocoding/get-api-key), retrieve the latitude and longitude of the input location
* Using forecast.io, retrieve the current forecast (for the next week) of the provided location
* Display this to the user in a nice way using [Automattic's `cli-table`](https://github.com/Automattic/cli-table) module
* For brownie points, use some weather [emojis](http://getemoji.com/) in your output :)

## Challenge!!
* Read the documentation about [Bluebird's `.map` method](https://github.com/petkaantonov/bluebird/blob/master/API.md#mapfunction-mapper--object-options---promise)
* Using the `map` method, write a function that takes an array of city names, and returns a `Promise` for an array of `{latitude, longitude}` objects
