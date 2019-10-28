// let range = {
//   from: 6,
//   to: 9
// };
//
// range[Symbol.iterator] = function() {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };
//
// for (let num of range) {
//   console.log(num); // 1, затем 2, 3, 4, 5
// }


// *********************************** СТРОКА - ПЕРЕБИРАЕМЫЙ ОБЪЕКТ:

// for (let char of "test") {
//   console.log( char ); // t, затем e, затем s, затем t
// }

// *********************************** Array.from:

// let arr = Array.from(range);
// console.log(arr);