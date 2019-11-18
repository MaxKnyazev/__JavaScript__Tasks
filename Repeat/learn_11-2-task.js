let obj = {
  age : 21,
  color : 'red'
};

function fn ({age : a}) {
  console.log(a)
}

fn(obj);
