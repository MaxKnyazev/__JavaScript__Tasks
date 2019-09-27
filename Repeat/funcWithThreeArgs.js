console.log('Started...');

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

const add2 = a => b => c => a + b + c;

console.log(add(1)(2)(3));
console.log(add2(3)(5)(7));