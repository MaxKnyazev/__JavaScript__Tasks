// function Worker() {
//   this.age = 18;
//
//   this.setAge = function(age) {
//     if (age >= 18 && age <= 65) {
//       this.age = age;
//     } else {
//       console.log('Неприемлемый возраст');
//     }
//   };
//
//   this.getAge = function() {
//     return this.age;
//   };
// }
//
// function User(compSkills) {
//   Worker.call(this);
//   this.computerSkills = compSkills;
// }
// User.prototype = Object.create(Worker.prototype);
// User.prototype.constructor = User;
//
// function Driver(isRights) {
//   Worker.call(this);
//   this.isRights = isRights;
//   this.experience = 0;
//
//   this.setExp = function(exp) {
//     if (exp > 3) {
//       this.experience = exp;
//     } else {
//       console.log('Маленький опыт');
//     }
//   };
//
//   this.getExp = function() {
//     return this.experience;
//   };
// }
// Driver.prototype = Object.create(Worker.prototype);
// Driver.prototype.constructor = Driver;
//
// let ivan = new Driver(true);
// console.dir(ivan);

class Worker {
  constructor() {
    this.age = 18;
  }

  set age (value) {
    if (value >= 18 && value <= 65) {
      this._age = value;
    } else {
      console.log('Неприемлемый возраст');
    }
  };

  get age () {
    return this._age;
  };
}

class User extends Worker {
  constructor(compSkills) {
    super();
    this.computerSkills = compSkills;
  }
}

class Driver extends Worker {
  constructor(isRights) {
    super();
    this.isRights = isRights;
  }

  set experience (value) {
    if (value > 3) {
      this._experiecne = value;
    } else {
      console.log('Маленький опыт');
    }
  }

  get experience () {
    return this._experiecne;
  }
}

let ivan = new Driver(true);
ivan.experience = 2;
console.dir(ivan);