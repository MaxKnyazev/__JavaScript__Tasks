/*

Замыкания.

*/

//----------------------------------------------------------------
//1. Замыкание локальной переменной count
//Задача : посчитать количество запусков функции closure
// function closure() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }
//
// let ff = closure();
//
// console.log(ff());
// console.log(ff());
// console.log(ff());
//
// console.dir(closure);

//----------------------------------------------------------------
//2. Замыкание параметра count
//Задача : посчитать количество запусков функции closure
// function closure(count) {
//     return function() {
//         return count++;
//     }
// }
//
// let ff = closure(0);
//
// console.log(ff());
// console.log(ff());
// console.log(ff());
//
// console.dir(closure);
//----------------------------------------------------------------

//3. Замыкание массива arr
//   Возвращается объект методов.
//   Только этим методам будет доступен arr.
// function test() {
//     let arr = [0, 0];
//     return function(){
//         return {
//             addNullElem : function() {
//                 arr[0] += 1;
//             },
//             addOneElem : function() {
//                 arr[1] += 1;
//             },
//             consoleArr : function() {
//                 console.log(arr);
//             }
//         }
//     }
// }
//
// let o = test()();
// o.consoleArr();
// o.addNullElem();o.addNullElem();
// o.consoleArr();
// o.addOneElem();o.addOneElem();o.addOneElem();
// o.consoleArr();

//----------------------------------------------------------------
//4. Использование статического свойства count
//   но это НЕ замыкание, т.к. свойство доступно извне,
//   оно является свойством объекта, а объект доступен
//   по ссылке
// function closure() {
//     closure.count = 0;
//     return function() {
//         closure.count++;
//     }
// }
//
// let ff = closure();
//
// ff();
// ff();
// closure.count += 1; // свойство доступно извне
// closure.count++;    // свойство доступно извне
// ff();
//
// console.log(closure.count);
// console.dir(closure);
