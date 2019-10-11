const target = 'Boston';

function* genData() {
  yield 'Аэрофлот';
  yield 'Сбербанк';
  yield '10311 810 5 000000287';
}

let generator = genData();

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// const airCompanyOfServer1 = 'Аэрофлот';
// const airBankOfServer2 = 'Сбербанк';
// const superAccountOfServer3 = '10311 810 5 000000287';

function getAirCompany (city) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(generator.next().value);
    }, 1000)
  })
}

function getAirBank (company) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(generator.next().value);
    }, 1000)
  })
}

function getSuperAccount (bank) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(generator.next().value);
    }, 1000)
  })
}

(async function () {
  try {
    let airCompany = await getAirCompany('Boston');
    console.log(airCompany);
    let airBank = await getAirBank(airCompany);
    console.log(airBank);
    let superAccount = await getSuperAccount(airBank);
    console.log(superAccount);
  } catch (error) {
    console.log(error)
  }
})();

// getAirCompany('Boston')
//   .then(function (data) {
//     let airCompany = data;
//     console.log(airCompany);
//     return getAirBank(airCompany);
//   })
//   .then(function (data) {
//     let airBank = data;
//     console.log(airBank);
//     return getSuperAccount(airBank);
//   })
//   .then( function ( data ) {
//     let superAccount = data;
//     console.log(superAccount);
//   })
//   .catch(function ( error ) {
//     console.log(error);
//   });