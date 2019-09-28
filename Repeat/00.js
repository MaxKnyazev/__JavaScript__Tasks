console.log('Started...');


// setTimeout(function () {
//   console.log(result);
//
//   setTimeout(function () {
//     console.log(++result);
//
//     setTimeout(function () {
//       console.log(++result);
//
//       setTimeout(function () {
//         console.log(++result);
//
//         setTimeout(function () {
//           console.log(++result);
//         }, 1000)
//
//       }, 1000)
//
//     }, 1000)
//
//   }, 1000)
//
// }, 1000);

// function writeNumbers (result) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(result);
//     }, 1000);
//   })
// };
//
// writeNumbers(0)
//   .then(function (data) {
//     console.log(++data);
//     return writeNumbers(data);
//   })
//   .then(function (data) {
//     console.log(++data);
//     return writeNumbers(data)
//   })
//   .then(function (data) {
//     console.log(++data);
//     return writeNumbers(data)
//   })
//   .then(function (data) {
//     console.log(++data);
//     return writeNumbers(data)
//   })
//   .then(function (data) {
//     console.log(++data);
//     return writeNumbers(data)
//   })





// const writeNumbers = result =>
//   new Promise( resolve =>{
//     setTimeout( () => {
//       console.log(++result);
//       resolve(result);
//     }, 1000);
//   });
//
// writeNumbers(0)
//   .then(data => writeNumbers(data))
//   .then(data => writeNumbers(data))
//   .then(data => writeNumbers(data))
//   .then(data => writeNumbers(data))
//   .then(data => writeNumbers(data))
//   .catch(error => console.log(error));





// const writeNumbers = result =>
//   new Promise( resolve =>{
//     setTimeout( () => {
//       console.log(++result);
//       resolve(result);
//     }, 1000);
//   });
//
// (async function () {
//   let result = await writeNumbers(0);
//   await writeNumbers(result);
//   await writeNumbers(++result);
//   await writeNumbers(++result);
//   await writeNumbers(++result);
// })();

