/*
Задание-2 :
Скопируйте код из Задания-1.
По данному коду надо продолжить восстановление объекта.
После запуска кода в консоль должно быыть выведено то,
что находится в комментарии.
* */

console.log(person.name);
console.log(person.age);
person.printInfo();
console.log('------------------------------------');

person.setName('Peter');
person.setAge(22);

console.log(person.name);
console.log(person.age);
person.printInfo();

/*******************************
 Ivan
 21
 Name Ivan age 21
 ------------------------------------
 Peter
 22
 Name Peter age 22
 */