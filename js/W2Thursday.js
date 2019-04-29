console.log('Test')
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
waitASecond(9)

function waitASecond(number) {
    let promise = new Promise(function (resolve, reject) {
        if (number < 5)
            resolve("resolved")
        else
            reject("rejected")
    });



}


function waitBSecond(number) {
    return new Promise((resolve, reject) => {
            setTimeout
        }

    )
}

console.log(`HI`)


async function process() {
    let status = await waitASecond();
    console log(status);

}