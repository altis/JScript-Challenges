class book {
    constructor(authorName, bookID) {
        this._authorName = authorName;
        this._bookID = bookID;
    }
    get bookProperties() {
        return this._authorName, this._bookID
    }
}

class person {
    constructor(name, age, personID, type) {
        this._personArray = [name, age, personID, type];
        this._name = name;
        this._age = age;
        this._ID = personID;
        this._type = type;
    }
    /*get name() {
        return this._name;

    }
    get age() {
        return this._age;
    }
    get personID() {
        return this.personID;
    }
    getType() {
        return this.type;
    }*/
    getpersonProperties() {
        return this._personArray;

    }

}
class libraryTicket {
    constructor(ticketNumber, numberOfUsedTicket) {
        this._ticketNumber = ticketNumber;
        this._numberOfUsedTicket = numberOfUsedTicket;
    }
}
class library extends person {

    constructor(name, age, personID, type) {
        super(name, age, personID, type)
        var boo = {
            data: ["S", "M", "L", "XL", "XXL"],
            name: 'size'
        };


    }
}

let testLibrary = new library(`Altis`, 22, 101, `Member`);
let name = testLibrary.getpersonProperties();
console.log(name)
console.log(testLibrary.getpls personProperties())