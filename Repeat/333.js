// function f () {
//   let count = 0;
//   return function () {
//     return count++;
//   }
// }
//
// let counter = f();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// **********************************************

// function f () {
//   let count = 0;
//   return function () {
//     return {
//       add () {
//         return count++;
//       },
//
//       sub () {
//         return count--;
//       }
//     };
//   }
// }
//
// let counter = f();
//
// console.log(counter().add());
// console.log(counter().add());
// console.log(counter().sub());
// console.log(counter().sub());

// **********************************************

// function myPromise () {
//   return new Promise (function (resolve, reject) {
//     setTimeout(function () {
//       let num = Math.random();
//
//       num < 0.5 ? resolve(num) : reject(num);
//     }, 1000)
//   });
// }
//
// myPromise().then(function (data) {
//   console.log(`Все ОК : ${data}`);
// })
// .catch(function (err) {
//   console.log(`Все не ОК : ${err}`)
// });

// **********************************************

// function myPromise () {
//   return new Promise (function (resolve, reject) {
//     setTimeout(function () {
//       let num = Math.random();
//
//       num < 0.5 ? resolve(num) : reject(num);
//     }, 1000)
//   });
// }
//
// (async function () {
//   try {
//     let res = await myPromise();
//     console.log(`Все ОК : ${res}`);
//   } catch (err) {
//     console.log(`Все не ОК : ${err}`);
//   }
//
// }());

// **********************************************

// let user = {
//   age : 20,
//   color : 'green'
// };

// function CreateObjects ({age, color}) {
//   return Object.freeze({
//     age,
//     color
//   })
// }

// let obj = CreateObjects(user);
// console.dir(obj);

// obj.age = 21;
//
// console.log(obj);