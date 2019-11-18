let arr = ['red', 30];

function fn ([color, age]) {
  // let color = a[0];
  // let age = a[1];

  console.log(`color : ${color}`);
  console.log(`age : ${age}`);
}

fn(arr);

function sum (a) {
  return a[0] + a[1];
}

console.log(sum([1, 2]));

