none = 56;
ntwo = 45;
nthree = 67;
nfour = 87;

/*none += nthree
ntwo *= nfour
nthree /= ntwo
nfour -= 10
let add = addition(none, ntwo)
multiply = multiplication(none, ntwo)
division = division(none, ntwo)
console.log(`Addition ${add}`)
console.log("Subtraction = " + nfour)
console.log("Multiplicatin = " + ntwo)
//console.log("Division = " + )
console.log("Modulo Addition = " + (nfour % 2))
console.log("-- " + none++)
console.log("++ " + ntwo--)

function addition(nOne, nTwo) {
    return (nOne + nTwo)
}

function multiplication(nOne, nTwo) {
    return (nOne * nTwo)
}

function division(nOne, nTwo) {
    return (nOne / nTwo)
}

let name = 'Altis'
let postCode = 'SK10'
let myAddress = 'UK'

console.log(`MY name is ${name} comming from ${myAddress}  ${postCode}`)

var doorOpen = "Close"

if (doorOpen == "Close")
    console.log("Door is Closed")
else
    console.log("Door is Open")

if (none > ntwo)
    console.log(none + " is geater")
else if (ntwo > nthree)

    console.log(ntwo + "is greater")

else if (nthree > nfour)
    console.log(`${nthree} is greater`)
else
    console.log(`${nfour} is greater`)

name = 'Altis'
postCode = 'SK10'
myAddress = 'UK'
var str = " This is a string methods demo "
console.log("Length " + str.length)
console.log("Locate " + str.indexOf("demo"))
console.log("Slice " + str.slice(4))
console.log("Char At " + str.charAt(8))
console.log("Str Concat " + str.concat(" Concat"))
console.log("Str trim() " + str.trim())
console.log("Sub String " + str.substring(6, 20))
console.log("Sub str " + str.substr(3, 6))
console.log("lastIndexOf " + str.lastIndexOf("demo"))
console.log("Replace " + str.replace("demo", "RDEMO"))
console.log(`MY name is ${name}`)*/

nOne = 1;
nTwo = 56;

nAdd = addition();
console.log(`Addition of two nos : ${nAdd}`);

function addition() {
  return nOne + nTwo;
}

day = "Wednesday";
/*

function dayFinder(day) {
    if (day == 'Monday')
        console.log("The day is Monday")
    else if (day == 'Tuesday')
        console.log("The day is Tuesday")
    else if (day == 'Wednesday')
        console.log("The day is Wednesday")
    else if (day == 'Thursday')
        console.log("THe day is THursday")
    else if (day == 'Friday')
        console.log("The day is Friday")
    else
        console.log("The day is Saturday")
}


console.log(dayFinder(day))*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    console.log("Read error");
}

console.log(`The day is ${day}`);
