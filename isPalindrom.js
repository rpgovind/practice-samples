'use strict';


function isPalindrome(searchstring) {
    var lowercase = searchstring.toLowerCase();
    var charArray = lowercase.split("");

    var lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");

    //strip off special characters from input to create new array

    var convertedArray = [];
    charArray.forEach(char => {
        if (lettersArray.indexOf(char) > -1) convertedArray.push(char);
    });

    return (convertedArray.join() === convertedArray.reverse().join())
}


var testInput = ["madam", "race car", "Madam , I'm Adam"];

testInput.forEach(testcase => {
    console.log(`${testcase} -  isPalindrome - ${isPalindrome(testcase)}`);
})