function Pencil(color) {
    this.color = color;
    this.pencilLength = 100;
    this.middleLength = 5;
}

Pencil.prototype.write = function(text) {
    if (this.middleLength >= 1) {
        console.log(`Введенный текст : ${text}`);
        this.middleLength -= 1;
        console.log(`Остаток грифеля : ${this.middleLength}`);
    } else {
        console.log('Заточите карандаш')
    }
};

Pencil.prototype.sharpen = function() {
    if (this.pencilLength >= 2) {
        this.middleLength = 5;
        this.pencilLength -= 5;
        console.log(`Остаток карандаша : ${this.pencilLength}`)
    } else {
        console.log('Карандаш невозможно заточить')
    }
};

console.dir(Pencil);

let pencilBlack = new Pencil('black');

console.dir(pencilBlack);

pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');
pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');

pencilBlack.sharpen();

pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');
pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');

pencilBlack.sharpen();

pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');
pencilBlack.write('111111111111111');
pencilBlack.write('222222222222222');
pencilBlack.write('333333333333333');

pencilBlack.sharpen();