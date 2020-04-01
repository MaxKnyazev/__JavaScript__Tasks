let person = {

    name : 'Ivan',
    age : 21,

    printInfo : function () {
        console.log(`Name ${this.name} age ${this.age}`);
    },

    setName : function (newName) {
        this.name = newName;
    },

    setAge : function (newAge) {
        this.age = newAge;
    }

};

console.log(person.name);
console.log(person.age);
person.printInfo();
console.log('------------------------------------');

person.setName('Peter');
person.setAge(22);

console.log(person.name);
console.log(person.age);
person.printInfo();

/*******************************
 Ivan
 21
 Name Ivan age 21
 ------------------------------------
 Peter
 22
 Name Peter age 22
 */
