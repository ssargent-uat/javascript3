//Using the original craps code we wrote due to time constraints and being far behind
// I could not think of anything else. Complete blank..
//lets get into it
//First we define the function
function play() {
//now we define the variable die1 and give it a limit
    var die1 = Math.ceil(Math.random() * 6);
    //define variable die2 and give it limit
    var die2 = Math.ceil(Math.random() * 6);
//we define the sum variable of both die1 and die2
    var sum = die1 + die2;
// we assign an id to die1 and die2 nad perpare to write them as such
    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;
//we check to see if the sums for equality
    if (sum == 7 || sum == 11) {
// define  ID and what to do else if 
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
// define ID for outcome if not above
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}
