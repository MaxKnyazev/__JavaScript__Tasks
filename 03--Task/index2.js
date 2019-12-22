//Started...
window.onload = function() {
    console.log('Started...');

    const wrapper = document.querySelector('.wrapper');

    class Element {
      constructor (size) {
        this.width = size + 'vmin';
        this.height = size + 'vmin';
      }

      letParametrs (elem) {
        elem.className = this.classNames;
        elem.innerText = this.content;
        elem.style.width = this.width;
        elem.style.height = this.height;
      }
    }

    class Counter extends Element {
      constructor (size, tag, classNames, content) {
        super (size);

        this.tag = tag;
        this.classNames = classNames;
        this.content = content;
      }

      render () {
        let elem = document.createElement(this.tag);
        this.letParametrs(elem);
        wrapper.append(elem);
      }
    }

    class Button extends Element {
      constructor (size, tag, classNames, content) {
        super (size);

        this.tag = tag;
        this.classNames = classNames;
        this.content = content;
      }

      render () {
        let elem = document.createElement(this.tag);
        this.letParametrs(elem);
        this.content === '+' ?
          elem.addEventListener('click', this.add):
          elem.addEventListener('click', this.sub);
        wrapper.append(elem);
      }

      add () {
        let contentNumber = document.querySelector('.content__number');
        let count = +contentNumber.innerText;
        if (count < 12) {
          contentNumber.innerText = count + 1;
        }
      }

      sub () {
        let contentNumber = document.querySelector('.content__number');
        let count = +contentNumber.innerText;
        if (count > 1) {
          contentNumber.innerText = count - 1;
        }
      }
    }

    let minus = new Button ('20', 'button', 'content content__button content__minus', '-');
    let counter = new Counter ('20', 'div', 'content content__number', '1');
    let plus = new Button ('20', 'button', 'content content__button content__plus', '+');

    minus.render ();
    counter.render ();
    plus.render ();
};
