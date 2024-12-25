// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function doubleArr(ar,callback){
    return ar.map(callback);
}

function double(num){
    return num*2;
}

let array = [2,5,7,8]
const doubledNum = doubleArr(array,double);
console.log(doubledNum);
