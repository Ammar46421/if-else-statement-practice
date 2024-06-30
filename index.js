var x = prompt("where is karachi?");
if (x === "Pakistan") {
    alert("Correct!")
};

if (x != "Pakistan") {
    alert("Incorrect!")
};

//chap 12

var yourTicketNumber = prompt("Input Your Ticket Number.");

if (yourTicketNumber == 4) {
    alert("you won rooh afza");
}

else {
    alert("Better luck next time.");
    
}


// chap 13
// if and else statement
var age = prompt("Enter Your Age.");

if (age <= 17) {
    alert("Pay Rs10.")
}
else if (age >= 18 && age <= 59) {
    alert("Pay Rs20.")
}
else {
    alert("Free Entry.")
};

