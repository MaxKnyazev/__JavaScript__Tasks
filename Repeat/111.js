class User {
  constructor(age){
    this.age = age
  }

  get age(){
    return this.vsyakayafignya;
  }

  set age(value){
    if (value <= 65 && value >= 18){
      this.vsyakayafignya = value
    } else {
      this.vsyakayafignya = 0
    }
  }
}

let user = new User(21);
console.log(user.age);

user.age = 70;
console.log(user.age);

user.vsyakayafignya = 70;
console.log(user.age);
