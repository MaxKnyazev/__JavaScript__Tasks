window.onload = function () {
  let wrapper = document.querySelector('.game__wrapper')
  let buttonStart = wrapper.querySelector('.game__start');
  let buttonAdd = wrapper.querySelector('.game__add');
  let gameMain = wrapper.querySelectorAll('.game__main');

  let one = [];
  let two = []

  function random (min, max) {
    return Math.ceil(min + Math.random() * (max - min));
  }

  function fillArray (a) {
    for (let i = 0; i < 3; i++) {
      a[i][0] = random(0, 2);
      a[i][1] = random(0, 3);
    }
  }

  fillArray(one);
  console.log(one); 

  this.console.dir(wrapper);
  this.console.dir(buttonStart);
  this.console.dir(gameMain);

  buttonStart.addEventListener('click', function () {
    buttonStart.setAttribute('disabled', true);
    buttonStart.classList.toggle('game__button--disable');

    buttonAdd.removeAttribute('disabled');
    buttonAdd.classList.toggle('game__button--disable');
    console.log(123);

    for (let i = 0; i < 3; i++) {
      
    }
  });

  buttonAdd.addEventListener('click', function () {
    // if (random(0, 2) === 2) {
    //   gameMain[0]
    // }
  })
};



//     let elem = document.createElement('div');
//     elem.style.width = this.width + 'rem';
//     elem.style.height = this.height + 'rem';
//     elem.style.backgroundColor = this.bgc;
//
//     if (this.borRad) {
//         elem.style.borderRadius = this.borRad + '%';
//     }
//
//     contentArea.append(elem);

// function random(min, max) {
//   return Math.ceil(min + Math.random() * (max - min));
// }
// 0, 3