const counting = (ms) => {
    setTimeout(() => {
        console.log('-------> ОДИН');
        setTimeout(() => {
            console.log('-------> ДВА');
            setTimeout(() => {
                console.log('-------> ТРИ');
                setTimeout(() => {
                    console.log('-------> ЧЕТЫРЕ');
                    setTimeout(() => {
                        console.log('-------> ПЯТЬ');
                    }, ms);
                }, ms);
            }, ms);
        }, ms);
    }, ms);
};

//counting(1000);

function delay(ms) {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.8) {
            setTimeout(resolve, ms);
        } else {
            reject('Math.random() >= 0.8');
        }
    })
}

delay(1000)
    .then(() => {
        console.log('----> ОДИН');
        return delay(1000);
    })
    .then(() => {
        console.log('----> ДВА');
        return delay(1000);
    })
    .then(() => {
        console.log('----> ТРИ');
        return delay(1000);
    })
    .then(() => {
        console.log('----> ЧЕТЫРЕ');
        return delay(1000);
    })
    .then(() => {
        console.log('----> ПЯТЬ');
        return delay(1000);
    })
    .catch((err) => console.log(err));




