// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?albumId=1&id=1', true);
// xhr.send();
// console.dir(xhr.responseText ? xhr.responseText : `Ответ НЕ получен`);

//----------------------------------------------------------------------------------

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?albumId=1&id=1', true);
// xhr.send();
//
// //0, 10, 100
// setTimeout(function(){
//     if (xhr.status != 200) {
//         console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
//     } else {
//         console.dir(xhr.responseText);
//     }
// }, 1000);

//----------------------------------------------------------------------------------

function requestFromTheServer() {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos?albumId=1&id=1', true);
        xhr.send();

        setTimeout(function(){
            if (xhr.status != 200) {
                //console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                reject(xhr.status);
            } else {
                //console.dir(xhr.responseText);
                resolve(xhr.responseText);
            }
        }, 1000);
    })
}

console.dir(requestFromTheServer());

requestFromTheServer()
    .then(function(data){
        console.dir(`Ответ сервера : ${data}`);
    })
    .catch(function(err){
        console.dir(`ОШИБКА : ${err}`);
    });
//----------------------------------------------------------------------------------


async function one() {
    return {};
};
console.dir(one());




//setTimeout(() => console.dir(JSON.parse(xhr.response)[0]), 1000);

//***************************************************************************
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceh999older.typicode.com/photos?albumId=1&id=1', true);

// xhr.timeout = 0;
//
// xhr.addEventListener('load', function(e) {
//     console.dir(xhr.responseText);
//     resolve(xhr.responseText);
// });
//
// xhr.addEventListener('error', function(e) {
//     console.dir(`Error : ${xhr.responseText}`);
//     reject(xhr.responseText);
// });

// xhr.addEventListener('timeout', function(e) {
//     console.dir('timeout off');
// });
//
//xhr.send();

//***************************************************************************
// xhr.onreadystatechange = function() {
//     if (this.readyState != 4) return;
//
//     // по окончании запроса доступны:
//     // status, statusText
//     // responseText, responseXML (при content-type: text/xml)
//
//     if (this.status != 200) {
//         // обработать ошибку
//         alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
//         return;
//     }
//
//     // получить результат из this.responseText или this.responseXML
// //    console.dir(this.responseText);
// }
