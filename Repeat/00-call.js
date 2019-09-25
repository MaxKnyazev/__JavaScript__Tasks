console.log('Started...');

function printCharacter (x1 = ':', x2 = ':') {
    console.log(`Имя: ${this.name} ${x1} возраст ${this.age} ${x2}`);
}

// printCharacter.name = 'Max';

let c1 = {
    name: 'Ivan',
    age: 20
},
    c2 = {
    name: 'Petr',
    age: 30
};

let arr = ['**', '++'];

// console.log(printCharacter.name);

console.log('----------------CALL--------------');
printCharacter.call(c1, '***', '+++');
printCharacter.call(c2, '***', '+++');
printCharacter.call(null);
printCharacter();
printCharacter.call(c2, ...arr);

console.log('-------------APPLY-----------------');
printCharacter.apply(c1, ['***', '+++']);
printCharacter.apply(c2, arr);

console.log('-------------BIND-----------------');
let fn = printCharacter.bind(c1, '*');
fn('+');
fn('~');


