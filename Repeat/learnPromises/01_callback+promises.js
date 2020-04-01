//---------------------------------------------   0 -- sync
//
// console.log('Started 0 ...');
//
// let num_1 = Math.random().toFixed(5) + ' | ';
// console.log(num_1);
//
// let num_2 = num_1 + Math.random().toFixed(5) + ' | ';
// console.log(num_2);
//
// let num_3 = num_2 + Math.random().toFixed(5) + ' | ';
// console.log(num_3);
//
// let num_4 = num_3 + Math.random().toFixed(5) + ' | ';
// console.log(num_4);
//
// let num_5 = num_4 + Math.random().toFixed(5) + ' | ';
// console.log(num_5);

//---------------------------------------------   1 -- sync

// console.log('Started 1 ...');
// let rnd;
//
// rnd = Math.random().toFixed(5);
// let num_1 = '0: ' + rnd + ' | ';
// if (rnd <= 0.5) {
//     console.log(num_1);
// } else {
//     console.log('ERROR : --->  rnd > 0.5');
// }
//
// rnd = Math.random().toFixed(5);
// let num_2 = num_1 + '2: ' + rnd + ' | ';
// if (rnd <= 0.5) {
//     console.log(num_2);
// } else {
//     console.log('ERROR : --->  rnd > 0.5');
// }
//
// rnd = Math.random().toFixed(5);
// let num_3 = num_2 + '4: ' + rnd + ' | ';
// if (rnd <= 0.5) {
//     console.log(num_3);
// } else {
//     console.log('ERROR : --->  rnd > 0.5');
// }
//
// rnd = Math.random().toFixed(5);
// let num_4 = num_3 + '6: ' +  rnd + ' | ';
// if (rnd <= 0.5) {
//     console.log(num_4);
// } else {
//     console.log('ERROR : --->  rnd > 0.5');
// }
//
// rnd = Math.random().toFixed(5);
// let num_5 = + num_4 + '8: ' + rnd + ' | ';
// if (rnd <= 0.5) {
//     console.log(num_5);
// } else {
//     console.log('ERROR : --->  rnd > 0.5');
// }

//---------------------------------------------   2 -- async callbacks
//
// console.log('Started 2 ...');
//
// setTimeout(() => {
//     let rnd = Math.random().toFixed(5);
//     let num_1 = '0: ' + rnd + ' | ';
//     if (rnd <= 0.5) {
//         console.log(num_1);
//     } else {
//         console.log('ERROR : --->  rnd > 0.5');
//     }
//     setTimeout(() => {
//         let rnd = Math.random().toFixed(5);
//         let num_2 = num_1 + '2: ' + rnd + ' | ';
//         if (rnd <= 0.5) {
//             console.log(num_2);
//         } else {
//             console.log('ERROR : --->  rnd > 0.5');
//         }
//         setTimeout(() => {
//             let rnd = Math.random().toFixed(5);
//             let num_3 = num_2 + '4: ' + rnd + ' | ';
//             if (rnd <= 0.5) {
//                 console.log(num_3);
//             } else {
//                 console.log('ERROR : --->  rnd > 0.5');
//             }
//             setTimeout(() => {
//                 let rnd = Math.random().toFixed(5);
//                 let num_4 = num_3 + '6: ' +  rnd + ' | ';
//                 if (rnd <= 0.5) {
//                     console.log(num_4);
//                 } else {
//                     console.log('ERROR : --->  rnd > 0.5');
//                 }
//                 setTimeout(() => {
//                     let rnd = Math.random().toFixed(5);
//                     let num_5 = + num_4 + '8: ' + rnd + ' | ';
//                     if (rnd <= 0.5) {
//                         console.log(num_5);
//                     } else {
//                         console.log('ERROR : --->  rnd > 0.5');
//                     }
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//---------------------------------------------   3 -- promises

console.log('Started 3 ...');

function promise1() {
    return new Promise((resolve, reject) => {

    })
}

function promise2() {
    return new Promise((resolve, reject) => {

    })
}

function promise3() {
    return new Promise((resolve, reject) => {

    })
}

function promise4() {
    return new Promise((resolve, reject) => {

    })
}

function promise5() {
    return new Promise((resolve, reject) => {

    })
}

//---------------------------------------------   1 -- callbacks
