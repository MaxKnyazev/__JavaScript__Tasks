// import { of, fromEvent } from 'rxjs.umd.min';
// import { map, debounce, debounceTime, buffer, filter } from 'rxjs.umd.min';

import { of, fromEvent } from 'rxjs';
import { map, debounce, debounceTime, buffer, filter } from 'rxjs/operators';

document.getElementById('classicClick').onclick = tripleClickFunc();
const clickStream = fromEvent(document.getElementById('rxjsClick'), 'click');
const debounced = clickStream.pipe(
    debounceTime(250)
);

debounced.subscribe(x => {
    console.log('Debounces', x);
});

const multipleClicks = clickStream.pipe(
    buffer(debounced),
    map(clicks => clicks.length)
);

multipleClicks.subscribe(x => console.log("Clicks: ", x));

const triple = clickStream.pipe(
    buffer(debounced),
    map(clicks => clicks.length),
    filter(x => x === 3),
);

function tripleClickFunc() {
    let clickCount = 0;
    let timeout = null;

    function setUpTimer() {
        return setTimeout(() => {
            console.log("Click count:", clickCount);
            if (clickCount === 3) {
                console.log("CLASSIC TRIPLE CLICK!!!");
            }
            timeout = null;
            clickCount = 0;
        }, 250)
    }

    return () => {
        clickCount++;
        if (!timeout) {
            timeout = setUpTimer();
        } else {
            clearTimeout(timeout);
            timeout = setUpTimer();
        }
    }
}


const clickStream2 = fromEvent(document.getElementById('rxjsClick'), 'click');

clickStream2.pipe(
    buffer(clickStream2.pipe(debounceTime(250))),
    map(clicks => clicks.length),
    filter(x => x === 3)
).subscribe(x => console.log("TRIPLE CLICK!"));