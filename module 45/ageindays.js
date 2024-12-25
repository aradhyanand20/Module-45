// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.

function ageInDays(per,callback){
    const fullName = `${per.firstName} ${per.lastName}`;
    const ageInDays  = per.age*365;
    return callback(ageInDays,fullName);
}
 function logAgeInDays(age,name){
        console.log(`${name} is ${age} days old.`);
 }
 
 const person = {
        firstName: "Aradhya",
        lastName: "Anand",
        age: 21
 }

 let newPerson = ageInDays(person,logAgeInDays);