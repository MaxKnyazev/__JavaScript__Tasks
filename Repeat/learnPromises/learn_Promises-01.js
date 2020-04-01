 function start() {
    console.log('Run function start');
}

function one(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
//            f();
//            resolve('one promise')
            resolve(start);
        }, time)
    })
}

//теперь resolve передает в then функцию start в виде data

one(1000)
    .then((data) => {
        console.log(data); //это функция!!!
        data();
        return one(3000);
    })
    .then((data) => {
        data();
    })
    .catch((err) => {
        console.log(err);
    })