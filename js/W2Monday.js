console.log("Test")

function generateRandomNumber(max, min, count) {

    console.log(`The random numbers are`)
    for (i = 0; i < count; i++) {
        console.log(Math.floor(Math.random() * 10))
    }

    //alert(`The Random numbers are \n` + displayRandomNumbers(min, max))
}

//generateRandomNumber(1, 50, 6)
/*console.log(`The numbers are`)
for (i = 9; i >= 0; i--) {
    console.log(i)
}*/
/*
let mark = [50, 60, 80, 90, 89]
let totalMarks = 0
for (let i = 0; i < mark.length; i++) {
    totalMarks += mark[i]
}
console.log(totalMarks)

let moviesList = [`CIA\n`, `Snowden\n`, `Matrix\n`, `Hunter\n`, `Terminator\n`]

//addMovies()
alert(moviesList.length)

function addMovies() {
    counter = Number(prompt("Enter the number of movies to be added"))
    let init = moviesList.length;
    for (let aIndex = moviesList.length; aIndex < init + counter; aIndex++) {

        alert(aIndex)
        //moviesList[aIndex + 1] = "Sample"
        moviesList[moviesList.length + 1] = prompt("Fav movie")


    }
}
*/

/*
let cards = [`Diamond`, `Spade`, `Heart`, `Club`]
let currentCard = `Diamond`

while (currentCard !== `Spade`) {

    randomPick = Math.floor((Math.random() * 10) % cards.length)
    //console.log(randomPick)
    currentCard = cards[randomPick]
    console.log('Oops.. Try Again')

}
console.log(`Congrats !! \n You have picked Spade`)
*/

let myItems = [45, 67, 34, 78, 23]

bubbleSort()


function bubbleSort() {
    let aIndex = 0

    for (aIndex = 0; aIndex <= myItems.length; aIndex++) {

        let arayJIndex = 0;
        while (arayJIndex <= myItems.length) {

            if (myItems[arayJIndex] > myItems[arayJIndex + 1]) {
                temp = myItems[arayJIndex]
                myItems[arayJIndex] = myItems[arayJIndex + 1]
                myItems[arayJIndex + 1] = temp

                //console.log("Exchange")
            }
            arayJIndex++
        }
    }

}
for (i = 0; i < myItems.length; i++)
    console.log(myItems[i])