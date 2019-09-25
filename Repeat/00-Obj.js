let o = {
    title : 'one',
    age : 1
};

console.log(o);

function CreateO (title_, age_) {
    //let this = {}
    this.title = title_;
    //this = {title: ***}
    this.age = age_;
    //this = {title: ***, age: ***}

    //return this
}

let o2 = new CreateO('two', 2);

console.log(o2);