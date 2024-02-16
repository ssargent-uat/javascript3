function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2;

    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;

    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}
