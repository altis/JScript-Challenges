console.log(`Test`)

reverseString("Sample text")

function reverseString(sampleString) {
    reverseText = " "

    for (let aIndex = sampleString.length - 1; aIndex > 0; aIndex--) {
        reverseText += sampleString[aIndex]
    }

    console.log(reverseText)
}

console.log(8 % 3 ? "Odd no" : "Even no")

age = 25

console.log(age > 18 ? `Adult` : `Kid` && age > 60 ? `older` : `something`)