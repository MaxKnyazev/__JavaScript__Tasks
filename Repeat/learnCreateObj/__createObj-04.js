/*
Задание-4 :
Скопируйте код из Задания-3.
По данному коду надо продолжить восстановление объекта.
После запуска кода в консоль должно быыть выведено то,
что находится в комментарии.

Необходимо поправить только один метод setName.
* */

// //антипаттерн : не рекомендуется напрямую обращаться к "закрытому" свойству объекта
// console.log(person._name);
// //антипаттерн : не рекомендуется напрямую обращаться к "закрытому" свойству объекта
// console.log(person._age);
// person.printInfo();
// console.log('------------------------------------');
//
// person.getName();
// person.setName('Peter');
// person.getName();
// console.log('------------------------------------');

person.getName();
person.setName();
person.setName('');
person.setName('          ');
person.getName();
console.log('------------------------------------');

// person.getAge();
// person.setAge(31);
// person.getAge();
// console.log('------------------------------------');
//
// person.getAge();
// person.setAge(-1);
// person.getAge();
// console.log('------------------------------------');

/*******************************
 Ivan
 Отсутствие имени недопустимо!
 Отсутствие имени недопустимо!
 Пустое имя недопустимо!
 Ivan
 ------------------------------------
 */