//checkPreferedGame(`Nintendo`, `Mario Kart`)

function checkPreferedGame(firstChoice, secondChoice) {

    if (firstChoice == `Nintendo` && secondChoice == `Mario Kart`)
        console.log(`Lets play the game`)
    else
        console.log(`You are missing out`)


}
//Task2
listMultiple()

function listMultiple() {
    let sum = 0
    for (let index = 0; index <= 1000; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            //console.log(index)
            sum += index
        }
    }
    console.log(`Sum of multiples of 3 and 5 ${sum}`)
    sumOfDigit(sum)

}
//sumOfDigit(12)

function sumOfDigit(sum) {
    let total = 0

    while (sum) {
        //console.log(sum % 10)
        total += sum % 10
        sum = Math.floor(sum / 10)

    }
    console.log(`Total sum of Digits ${total}`)

}

function sumOfLargeDigit() {
    let largeSum = 0
    let largeNumber = "371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331"
    for (let aIndex = 0; aIndex < largeNumber.length; aIndex++) {

        largeSum += Number(largeNumber.charAt(aIndex))

    }
    console.log(`The sum of large digits ${largeSum}`)
}

sumOfLargeDigit()

const blackadersDeliveryStrategy = {
    averageDay: `mild insult needed - you oaf`,
    badDay: `The eyes are open, the mouth moves..`,

};

//Task*
let day = `bad`
let insult

if (day == `bad`)
    insult = 'badDay'
else
    insult = `averageDay`

console.log(blackadersDeliveryStrategy[insult])

rabit = {
    name: `Sherlock`,
    color: `black and white`,
    ears: `uppy`,
    bunHop: function bunHop() {
        console.log(`Rabit is hoping`)

    },
    bunChew: function bunChew() {
        console.log(`Rabit is Chewing`)
    }



};

rabit.bunChew()
rabit.bunHop()

//TAsk

ticketReservation = {

    checkAvailablity: function checkAvailablity() {}
}