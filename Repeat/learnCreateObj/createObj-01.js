let person = {

    name : 'Ivan',
    age : 21,

    printInfo : function () {
        console.log(`Name ${this.name} age ${this.age}`);
    }

};

console.log(person.name);
console.log(person.age);
person.printInfo();

/*******************************
 Ivan
 21
 Name Ivan age 21
*/