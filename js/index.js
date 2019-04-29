/*
	does a thing	
*/
/*function some_Time(Time, d) {
    if (d == "Sunday") {
        if (Time > 8 && Time < 18)
            return "shop is open"
        else
            return "shop is closed"
    } else if (d == "Saturday")
        if (Time > 8 && Time < 18)
            return "shop is open"
    else
        return "shop is closed"

    else if (Time > 6 && Time < 20)
        return "shop is open"
    else
        return "shop is closed"
}*/

/*
	does a thing	
*/

/*function some_Time(Time, d) {

    switch (d) {
        case "Sunday" || "Saturday":
            if (weakEndTimings(Time))
                return true
            else
                return false

            break;

        default:
            if (Time > 6 && Time < 20)
                return true
            else
                return false
            break;
    }

}

function weakEndTimings(Time) {
    if (Time > 8 && Time < 18)
        return true
    else
        return false
}


//console.log(some_Time(14, "Sunday"));

if (some_Time(14, "Sunday"))
    console.log("Shop is open")
else
    console.log("Shop is closed") */


const cofeeOrder = (size, typeOfDrink) => {
    console.log(`The type of Drink ${typeOfDrink} and the prferred size is ${size} `)
}

cofeeOrder("tall", "Cofee latte")


//var person = prompt("Please enter your name", "Harry Potter");

pinNumber = 1234;
const dailyWithdrewLimit = 500;

var cashBalance = 987;

var cashWithdrewToday = 0;
//var dailyWithdrewLimit;


function accountBalance() {
    window.alert(`Your Account Balance : ${cashBalance}`)
}

function deposit() {
    let cashToDeposit = Number(window.prompt("Enter the amount to deposit ito your account \n"))
    cashBalance += cashToDeposit
}

function withdrewCash() {

    let cashToWithdrew = Number(prompt("Enter amount to withdrew  \n"))
    if (cashToWithdrew > cashBalance)

        alert("You have reached your maximum withdrewal limit..!")
    else {

        cashBalance -= cashToWithdrew
        cashWithdrewToday += cashToWithdrew
    }
}

function updatePin() {


    if (authenticateUser()) {
        pinNumber = Number(prompt("Enter your new PIN"))
        alert("Your new PIN successfully updated..!")
    } else
        alert("You have entered wrong PIN")
}

function authenticateUser() {
    userPinNumber = Number(window.prompt(`Welcome to XY Cash machine \n Please enter your PIN to continue`))
    if (pinNumber == userPinNumber)
        return true
    else {
        window.alert("You have entered a wrong PIN")
        return false
    }
}

//window.alert(`Your Account Balance : ${cashBalance}`)
option = 1;


if (authenticateUser())
    do {


        option = Number(window.prompt("Welocome to XX Cash Machine \n 1. Balance \n 2. Deposit \n 3. Withdrew \n 4. Change PIN \n 5. Exit "))

        switch (option) {

            case 1:
                accountBalance()
                break;
            case 2:
                deposit()
                break;

            case 3:
                withdrewCash()
                break;
            case 4:
                updatePin()
                break;
            default:
                window.alert("Pls enter any option displayed..!")
                break;
        }
    } while (option != 5)