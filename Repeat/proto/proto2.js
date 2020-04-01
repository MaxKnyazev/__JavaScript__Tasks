// let serg = {
//     age : 50,
    // sayAge() {
    //     console.log(this.age);
    // }
    // sayAge : function() {
    //     console.log(this.age);
    // }
// };
// serg.sayAge = function() {
//     console.log(this.age)
// };
// Object.prototype.sayAge = function() {
//     console.log(this.age);
// };
//
// serg.sayAge();
// console.dir(serg);

function SergConst() {
    this.age = 50;
}

// console.dir(Function);

Function.prototype.sayAge = function() {
    console.log(this.age)
}

// Object.prototype.sayAge = function() {
//     console.log(this.age)
// }

console.dir(Function);

let serg5 = new SergConst();
console.dir(serg5);
serg5.sayAge();

let serg = {};
serg.sayAge();