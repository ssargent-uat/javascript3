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
    console.log("You are an adult!")
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
let globalVar = "I am global";

function exampleFunction(){
    let localVar = "I am local";
    //console.log(localVar);
}

 function executeFunction(){
    document.getElementById('sample').innerHTML = "Stephen is, but he is catching up";
}

console.log(globalVar);
exampleFunction()

//Types - Built in, User defined
console.log(Math.random()); //0,1

//Range (0, 1) - 1, 5 - (1,5)
function generateRandomNumber(){
    return (Math.random()*5)+1
}

let randomnumberGenerated = generateRandomNumber();
 //   console.log(randomnumberGenerated);

// user-defined: find the max of two numbers
function maxOfTwoNumbers(a,b){
    if(a>b){
        return a;

    }
    else{
        return b
    }
}
console.log(maxOfTwoNumbers(4,7));

//Variables - var, let, const

//reassign and redeclare
var x = 5; //integer
var firstName = "Stephen" //string
var status = true; //boolean

var x = 6;
var y = 4;
var z = x+y;
console.log("sum of x and y is:", z);

var x = 2;
console.log(x);

//redfining variables for different results
y = 7;
x = 2;
var z = x+y;
console.log(y);
console.log(x);
console.log("sum of x and y is:", z);


// let - reassign but not redeclare
let fName = "Stephen ";
let lName = "LaTe";
console.log("My full name is"+ " "+ fName + "" + lName);

lName = "SuperLaTe";
console.log("My full name is"+ " "+ fName + "" + lName);

//const - no reassign or redeclare
const pi = 3.14;
console.log(pi);

//Operators 
//Arithmatic

var firstnum = 4;
var secondnum = 5;
console.log(firstnum + secondnum);
console.log(firstnum - secondnum);
console.log(firstnum * secondnum);
console.log(firstnum / secondnum);
console.log(firstnum % secondnum);
console.log(--firstnum);

//Assignment
console.log(firstnum += secondnum);
console.log(firstnum -= secondnum);

//Comparison Operators - <, >, <=, >=, !=
console.log(firstnum > secondnum);
console.log(firstnum < secondnum);
console.log(firstnum >= secondnum);
console.log(firstnum >= secondnum);
console.log(firstnum != secondnum);