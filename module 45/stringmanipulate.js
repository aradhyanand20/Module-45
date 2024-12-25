// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.
function manipulateString(str){
    const upperStr = str.toUpperCase();
    return function logString(){
        console.log(`The manipulated string is: ${upperStr}`);
    };
}
const string1 = "Aradhya this side";
const upperString = manipulateString(string1);
upperString()
