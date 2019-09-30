console.log('Started...');


let btnCircle = document.querySelector('.content__btnCircle');
let btnSquare = document.querySelector('.content__btnSquare');
let contentArea = document.querySelector('.content__area');

function Rectangle (width, height, bgc) {
    this.width = width;
    this.height = height;
    this.bgc = bgc;
};

function Circle (width, height, bgc, borRad) {
    Rectangle.call(this, width, height, bgc);
    this.borRad = borRad;
}

Circle.prototype = Object.create(Rectangle.prototype);
Circle.prototype.constructor = Circle;

Rectangle.prototype.render = function () {
    let elem = document.createElement('div');
    elem.style.width = this.width + 'rem';
    elem.style.height = this.height + 'rem';
    elem.style.backgroundColor = this.bgc;

    if (this.borRad) {
        elem.style.borderRadius = this.borRad + '%';
    }

    contentArea.append(elem);
};

btnSquare.addEventListener('click', function () {
    let square = new Rectangle(4, 4, 'blue');
    square.render();
});

btnCircle.addEventListener('click', function () {
    let circle = new Circle(8, 8, 'red', 50);
    circle.render();
});





/*

btnCircle.addEventListener('click', function () {
    let circle = document.createElement('div');
    circle.style.width = '7rem';
    circle.style.height = '7rem';
    circle.style.backgroundColor = 'red';
    circle.style.borderRadius = '50%';

    contentArea.append(circle);
});


btnSquare.addEventListener('click', function () {
    let square = document.createElement('div');
    square.style.width = '7rem';
    square.style.height = '7rem';
    square.style.backgroundColor = 'blue';

    contentArea.append(square);
});
*/