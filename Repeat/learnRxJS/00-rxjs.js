const rxjs = require('rxjs');
const { interval, of, from, timer } = require('rxjs');
const { take, repeat, delay, delayWhen, map} = require('rxjs/operators');

//console.dir(rxjs);
//
// const numbers = interval(1000);
//
// const takeFourNumbers = numbers.pipe(
//     take(4));
//
// takeFourNumbers.subscribe(x => console.log('Next: ', x));

// const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
//     return 'Hello';

//
// const delayedThing = of('delayed value')
//     .pipe(
//         delay(1000),
//         repeat(3));
//
// delayedThing.subscribe(console.log);

let arr = [];
let result = '';
const randomNumbers = from(arr).pipe(
        delayWhen(x => timer(arr.indexOf(x) * 1000)),
        map(value => result += `| ${value} `),
    );

arr.push(Math.random().toFixed(5));
arr.push(Math.random().toFixed(5));
arr.push(Math.random().toFixed(5));
arr.push(Math.random().toFixed(5));
arr.push(Math.random().toFixed(5));

randomNumbers.subscribe(value => console.log(value));

