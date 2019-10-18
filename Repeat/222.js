function createStrCount (previousCount, count) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() <= 0.5) {
        resolve(`${previousCount}|${count}|`);
      } else {
        reject('Значение > 0.5');
      }
    }, 1000)
  })
}

(async function () {
  try {
    let result = await createStrCount ('', 'Один');
    console.log(result);
    result = await createStrCount (result, 'Два');
    console.log(result);
    result = await createStrCount (result, 'Три');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();


// createStrCount('', 'Один')
//   .then(function (data) {
//     console.log(data);
//     return createStrCount(data, 'Два')
//   })
//   .then(function (data) {
//     console.log(data);
//     return createStrCount(data, 'Три')
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(error => console.log(error));

