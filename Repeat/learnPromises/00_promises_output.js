// console.log('ОДИН');
// setTimeout(function() {
//     console.log('ДВА');
//
//     setTimeout(function() {
//         console.log('ТРИ');
//
//         setTimeout(function() {
//             console.log('ЧЕТЫРЕ');
//
//             setTimeout(function() {
//                 console.log('ПЯТЬ');
//             }, 1000)
//
//         }, 1000)
//
//     }, 1000)
//
// }, 1000);

//==============================================

// let rand = Math.random();
// if (rand <= 0.8) {
//     console.log('ОДИН');
// } else {
//     console.log('Math.random() >= 0.8')
// }
// setTimeout(function() {
//     rand = Math.random();
//     if (rand <= 0.8) {
//         console.log('ДВА');
//     } else {
//         console.log('Math.random() >= 0.8')
//     }
//
//     setTimeout(function() {
//         rand = Math.random();
//         if (rand <= 0.8) {
//             console.log('ТРИ');
//         } else {
//             console.log('Math.random() >= 0.8')
//         }
//
//         setTimeout(function() {
//             rand = Math.random();
//             if (rand <= 0.8) {
//                 console.log('ЧЕТЫРЕ');
//             } else {
//                 console.log('Math.random() >= 0.8')
//             }
//
//             setTimeout(function() {
//                 rand = Math.random();
//                 if (rand <= 0.8) {
//                     console.log('ПЯТЬ');
//                 } else {
//                     console.log('Math.random() >= 0.8')
//                 }
//             }, 1000)
//
//         }, 1000)
//
//     }, 1000)
//
// }, 1000);

//==============================================

// let rand = Math.random();
// if (rand <= 0.8) {
//     console.log('ОДИН');
//
//     setTimeout(function () {
//         rand = Math.random();
//         if (rand <= 0.8) {
//             console.log('ДВА');
//
//             setTimeout(function () {
//                 rand = Math.random();
//                 if (rand <= 0.8) {
//                     console.log('ТРИ');
//
//                     setTimeout(function () {
//                         rand = Math.random();
//                         if (rand <= 0.8) {
//                             console.log('ЧЕТЫРЕ');
//
//                             setTimeout(function () {
//                                 rand = Math.random();
//                                 if (rand <= 0.8) {
//                                     console.log('ПЯТЬ');
//                                 } else {
//                                     console.log('Math.random() >= 0.8')
//                                 }
//                             }, 1000)
//                         } else {
//                             console.log('Math.random() >= 0.8')
//                         }
//
//                     }, 1000)
//                 } else {
//                     console.log('Math.random() >= 0.8')
//                 }
//
//             }, 1000)
//         } else {
//             console.log('Math.random() >= 0.8')
//         }
//     })
// }

//==============================================

// let rand = Math.random();
// if (rand <= 0.8) {
//     console.log('ОДИН');
//
//     setTimeout(function() {
//         rand = Math.random();
//         if (rand <= 0.8) {
//             console.log('ДВА');
//         } else {
//             console.log('Math.random() >= 0.8');
//             return;
//         }
//
//         setTimeout(function() {
//             rand = Math.random();
//             if (rand <= 0.8) {
//                 console.log('ТРИ');
//             } else {
//                 console.log('Math.random() >= 0.8');
//                 return;
//             }
//
//             setTimeout(function() {
//                 rand = Math.random();
//                 if (rand <= 0.8) {
//                     console.log('ЧЕТЫРЕ');
//                 } else {
//                     console.log('Math.random() >= 0.8');
//                     return;
//                 }
//
//                 setTimeout(function() {
//                     rand = Math.random();
//                     if (rand <= 0.8) {
//                         console.log('ПЯТЬ');
//                     } else {
//                         console.log('Math.random() >= 0.8');
//                         return;
//                     }
//                 }, 1000)
//
//             }, 1000)
//
//         }, 1000)
//
//     }, 1000)
//
// } else {
//     console.log('Math.random() >= 0.8')
// }

//==============================================

console.log('Started...');

function funTick(tick) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let rand = Math.random();
            if (rand <= 0.8) {
                resolve(tick);
            } else {
                reject('Math.random() > 0.8');
            }
        }, 1000)
    })
}

funTick('ОДИН')
    .then(function(data) {
        console.log(data);
        return funTick('ДВА');
    })
    .then(function(data) {
        console.log(data);
        return funTick('ТРИ');
    })
    .then(function(data) {
        console.log(data);
        return funTick('ЧЕТЫРЕ');
    })
    .then(function(data) {
        console.log(data);
        return funTick('ПЯТЬ');
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err)
    });

