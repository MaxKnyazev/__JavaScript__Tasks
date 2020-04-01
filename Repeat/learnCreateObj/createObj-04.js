let person = {

    _name : 'Ivan',
    _age : 21,

    printInfo : function () {
        console.log(`Name ${this._name} age ${this._age}`);
    },

    getName : function () {
        console.log(this._name);
    },

    setName : function (newName) {
        if (!newName) {
            console.log('Отсутствие имени недопустимо!');
        } else if (''+newName.trim() === '') {
            console.log('Пустое имя недопустимо!');
        } else {
            this._name = newName;
        }
    },

    getAge : function () {
        console.log(this._age);
    },

    setAge : function (newAge) {
        if (newAge < 0) {
            console.log('Отрицательный возраст недопустим!');
        } else {
            this._age = newAge;
        }
    }
};

// //антипаттерн : не рекомендуется напрямую обращаться к "закрытому" свойству объекта
// console.log(person._name);
// //антипаттерн : не рекомендуется напрямую обращаться к "закрытому" свойству объекта
// console.log(person._age);
// person.printInfo();
// console.log('------------------------------------');
//
// person.getName();
// person.setName('Peter');
// person.getName();
// console.log('------------------------------------');

person.getName();
person.setName();
person.setName('');
person.setName('          ');
person.getName();
console.log('------------------------------------');

// person.getAge();
// person.setAge(31);
// person.getAge();
// console.log('------------------------------------');
//
// person.getAge();
// person.setAge(-1);
// person.getAge();
// console.log('------------------------------------');

/*******************************
 Ivan
 Отсутствие имени недопустимо!
 Отсутствие имени недопустимо!
 Пустое имя недопустимо!
 Ivan
 ------------------------------------
 */