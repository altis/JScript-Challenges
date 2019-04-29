for (i = 44; i <= 67; i++) {
    console.log("hello update")
}
name = "altis";
postcode = "WA 4 ";
houseno = 21;

console.log(name.substring(2, 4))
console.log(postcode.trim())
if (name == postcode)
    console.log("Found post code")
else
    console.log("Not Found")
for (i = 0; i <= 20; i++) {
    /* if (i % 2 == 0)
         console.log("Even no " + i)
     else
         console.log("Odd no" + i)*/

    console.log(i % 2 ? "Odd no" : "Even no")
}

console.log(Math.floor(
    Math.random() * 100))