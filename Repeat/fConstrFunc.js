// let petr = {
//
//     surname : 'Petr',
//     age : 23,
//
//     getInfo : function(){
//         console.log(`Имя=${this.surname} возраст=${this.age}`);
//     }
// }
//
// console.dir(petr);
// console.log(petr.surname);
// console.log(petr.age);
// console.log(petr.getInfo());

//------------------------------------------------------------------
// function Person1(){
//     this.surname = 'Ivan';
//     this.age = 11;
//
//     this.getInfo = function(){
//         console.log(`Имя=${this.surname} возраст=${this.age}`);
//     }
// }
//
// let ivan = new Person1();
//
// console.dir(ivan);
// console.log(ivan.surname);
// console.log(ivan.age);
// console.log(ivan.getInfo());
// console.log(ivan instanceof Person1);

//------------------------------------------------------------------
//TODO:Что будет, если перед методом getInfo убрать this?
// function Person2(){
//     this.surname = 'Ivan2';
//     this.age = 22;
//
//     getInfo = function(){
//         console.log(`Имя=${this.surname} возраст=${this.age}`);
//     }
// }
//
// let ivan2 = new Person2();
//
// console.dir(ivan2);
// console.log(ivan2.surname);
// console.log(ivan2.age);
// console.log(ivan2 instanceof Person2);
//console.log(ivan2.getInfo());//TypeError: ivan2.getInfo is not a function
//console.log(Person2.getInfo());//TypeError: Person.getInfo is not a function

//------------------------------------------------------------------
//TODO:добавление статического метода getInfo функции-конструктору Person
// function Person3(){
//     this.surname = 'Ivan3';
//     this.age = 33;
// }
//
// Person3.getInfo = function(){
//     console.log(`Имя=${this.surname} возраст=${this.age}`);
// }
//
// let ivan3 = new Person3();
//
// console.dir(ivan3);
// console.log(ivan3.surname);
// console.log(ivan3.age);
// console.log(ivan3 instanceof Person3);
//
// console.dir(Person3);
// Person3.getInfo();
// Person3.getInfo.call(ivan3);

//------------------------------------------------------------------
//TODO:добавление метода getInfo в прототип родителя, конструктора Person
// function Person4(){
//     this.surname = 'Ivan4';
//     this.age = 44;
// }
//
// Person4.prototype.getInfo = function(){
//     console.log(`Имя=${this.surname} возраст=${this.age}`);
// }
//
// let ivan4 = new Person4();
//
// console.dir(ivan4);
// console.log(ivan4.surname);
// console.log(ivan4.age);
// console.log(ivan4 instanceof Person4);
// console.dir(Person4);
// ivan4.getInfo();

//------------------------------------------------------------------
//TODO : показать, как можно замкнуть переменную count в Person5
function Person5(){
    this.surname = 'Ivan';
    this.age = 55;

    let count = 0;

    this.incCount = function(){
        return function(){
            return count++;
        }
    };

    this.incCount2 = () => () => count++;
}

let ivan5 = new Person5();

console.log(ivan5.surname);
console.log(ivan5.age);
console.log(ivan5 instanceof Person5);
console.dir(ivan5);
console.dir(Person5);

const fCount = ivan5.incCount();
const fCount2 = ivan5.incCount2();
console.dir(fCount);

console.log(`count=${fCount()}`);
console.log(`count=${fCount2()}`);
console.log(`count=${fCount()}`);
console.log(`count=${fCount2()}`);



