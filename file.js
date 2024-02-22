// logical operators AND OR NOT (&&, ||, !)
let isAdult = true;
let hasLicense = true;

let canDrive = isAdult && hasLicense;
console.log(canDrive);

let hasCar = false;
let hasBike = false;

let hasVehicle = hasCar || hasBike;
console.log(hasVehicle);

let isStudent = true;
let isNotStudent = !isStudent;
console.log(isNotStudent);

let age = 25;
let hasExperience = true;

let isEligible = age >= 18 && hasExperience;
console.log(isEligible);

// conditionals: if, if-else, if else if-else

var ageOfPerson = 20;
if(ageOfPerson >= 18){
    console.log("You are andult!")
}


//Sample game
var dice1 = 2;
var dice2 = 5;

var sum = dice1 + dice2;
console.log(sum);

if (sum == 7 || sum == 11){
    console.log("you won");
}
else if(dice1 == dice2 && dice1%dice2 == 0){
    console.log("Try Again !");
}



// Functions
function greeting(fname, lname){
    console.log("Hello" + "" + fname +" " + lname);
}
greeting("jael", "Battana");
greeting("Adam", "Smith");

function add(a,b){
    return a+b;
}
let result = add(3,4);
console.log(result);

// Scope - local, global

function exampleFunction(){
    let localVar = "I am local";
    console.log(localVar);
}
exampleFunction()