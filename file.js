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

