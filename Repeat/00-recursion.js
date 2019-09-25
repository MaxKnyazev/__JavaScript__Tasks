// function fakt (num) {
//     let result = 1;
//     for(let i = 2; i<=num; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(fakt(1));

// function faktRec (num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * faktRec(num-1);
// }

// console.log(faktRec(5));

// function sumRec (num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num + sumRec(num-1);
// }
//
// console.log(sumRec(100000));

function sum (num) {
    let result = 1;
    for(let i = 2; i<=num; i++) {
        result += i;
    }
    return result;
}

console.log(sum(10000));