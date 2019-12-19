//Started...
window.onload = function() {
    console.log('Started...');

    const wrapper = document.querySelector('.wrapper');

    class Element {
      constructor (size) {
        this.width = size + 'vmin';
        this.height = size + 'vmin';
      }

      render (tag, classNames, content) {
        let elem = document.createElement(tag);
        elem.className = classNames;
        elem.innerText = content;
        elem.style.width = this.width;
        elem.style.height = this.height;
        wrapper.append(elem);
      }

      node () {
        return document.querySelector(`.${this.classNames.split(' ')[1]}`)
      }
    }

    class Counter extends Element {
      constructor (size, tag, classNames, content) {
        super(size);

        this.tag = tag;
        this.classNames = classNames;
        this.content = content;
      }
    }

    class Button extends Element {
      constructor (size, tag, classNames, content) {
        super(size);

        this.tag = tag;
        this.classNames = classNames;
        this.content = content;
      }

      add () {
        let contentNumber = document.querySelector('.content__number');
        let count = +contentNumber.innerText;

        if (count < 12) {
          contentNumber.innerText = count + 1;
        }

        console.log('+++++++++++++++');
      }

      sub () {
        let contentNumber = document.querySelector('.content__number');
        let count = +contentNumber.innerText;

        if (count > 1) {
          contentNumber.innerText = count - 1;
        }

        console.log('---------------');
      }
    }

    let minus = new Button ('20', 'button', 'content content__button content__minus', '-');
    minus.render('button', 'content content__button content__minus', '-');

    let counter = new Counter ('20', 'div', 'content content__number', '1');
    counter.render('div', 'content content__number', '1');

    let plus = new Button ('20', 'button', 'content content__button content__plus', '+');
    plus.render('button', 'content content__button content__plus', '+');

    minus.node().addEventListener('click', minus.sub);
    plus.node().addEventListener('click', plus.add);




    // <button class="content content__button content__minus"> - </button>
    //
    // <div class="content content__number"> 1 </div>
    //
    // <button class="content content__button content__plus"> + </button>




    // ------------------------------------------ I part: --------------------------------------------

    // let wrapper = document.querySelector('.wrapper');
    // let contentMinus = wrapper.querySelector('.content__minus');
    // let contentNumber = wrapper.querySelector('.content__number');
    // let contentPlus = wrapper.querySelector('.content__plus');
    //
    // contentMinus.addEventListener('click', function () {
    //     let count = +contentNumber.innerText;
    //
    //     if (count > 1) {
    //         contentNumber.innerText = count - 1;
    //     }
    // });
    //
    // contentPlus.addEventListener('click', function () {
    //     let count = +contentNumber.innerText;
    //
    //     if (count < 12) {
    //         contentNumber.innerText = count + 1;
    //     }
    // });
};
