// let ivan = {
//     age : 31
// }
//
// console.dir(ivan);
// console.log(ivan === window.ivan);
//
// let arr = [];
// console.dir(arr);
//
// let f = new Function('console.log("+++")');
// f();
//
// f.prototype.say = function(){
//     console.log('say');
// }
// console.dir(f);
//
// let g = new f();
// g.say();
//
// console.dir(g);

function addUrl(domen){
    return function(url){
        return `https://${url}.${domen}`;
    }
}

let url = addUrl('com');

console.log(url('google'));
console.log(url('vk'));

function Counter(count){
    return function(){
        return {
            addCount(){
            return count++;
            },

            deleteCount(){
            return count--;
            }
        }
    }
}

let counter = Counter(0);
let c = counter();

console.log(c);

console.log(counter().addCount());
console.log(counter().addCount());
console.log(counter().addCount());
console.log(counter().deleteCount());
console.log(counter().deleteCount());





