const MS = 1000;
// let result = '';
console.log('Started...');

// console.log('ОДИН');
// console.log('ДВА');
// console.log('ТРИ');

//----------------------------------------------
// setTimeout(function() {
//     result = result + 'ОДИН' + ' | ';
//     console.log(result);

//     setTimeout(function() {
//         result = result + 'ДВА' + ' | ';
//         console.log(result);

//         setTimeout(function() {
//             result = result + 'ТРИ' + ' | ';
//             console.log(result);
//         }, MS);

//     }, MS);

// }, MS);

//------------------------------------------------
// const writeNumber = (result = '', word) => 
//     new Promise((resolve, reject) =>
//     setTimeout(() => resolve(`${result}${word} | `), MS));

// writeNumber('', 'ОДИН')
//     .then(res => {
//         console.log(res);
//         return writeNumber(res, 'ДВА')
//     })
//     .then(res => {
//         console.log(res);
//         return writeNumber(res, 'ТРИ')
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => console.error(error));

//------------------------------------------------
const writeNumber = (result = '', word) => 
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${result}${word} | `), MS));

(async function(){
    let res = await writeNumber('', 'ОДИН');
    console.log(res);
    res = await writeNumber(res, 'ДВА');
    console.log(res);
    res = await writeNumber(res, 'ТРИ');
    console.log(res);
})();
