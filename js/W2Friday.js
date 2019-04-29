console.log('HI')

rabit = {
    name: `Navi`,
    hops: 0,
    age: 4,
    returnAge: function returnAge() {
        return this.age

    },
    returnState: function returnState() {
        return this.hops
    }
};

console.log(`MY Age is ${rabit.age}`)


class bunny {
    constructor(name) {
        this._name = name;
        this._hops = 0;
    }

    getName() {
        return this._name;
    }
    getHops() {
        return this._hops;
    }
    increaseHops() {
        this._hops++;
    }


}

let rabi = new bunny(`ff`)

console.log(`Bunny name ${rabi.getName()}`)
rabi.increaseHops()
console.log(`Increase Hops ${rabi.getHops()}`)


class UA92 {
    constructor(name, age, course, id) {
        this._name = name;
        this._age = age;
        this._course = course;
        this._id = id;
    }
    getName() {
        return this._name
    }
    getCourse() {
        return this._course
    }
    getId() {
        return this._id
    }
}

let tom = new UA92(`Tom`, 24, `Masters`, 101);

console.log(tom.getCourse())