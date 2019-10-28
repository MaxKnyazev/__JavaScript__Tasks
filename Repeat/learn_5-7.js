//********************************************* Map:

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


// let map = new Map();
//
// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ
//
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"
//
// console.log(map.size); // 3


//********************************************* ПЕРЕБОР Map:

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.


// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
//
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // огурец, помидор, лук
// }
//
// console.log('*****************');
//
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }
//
// console.log('*****************');
//
// for (let entry of recipeMap) {
//   console.log(entry); // огурец,500 (и так далее)
// }
//
// console.log('*****************');
//
//
// -----------------forEach:
//
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`); // огурец: 500 и так далее
// });



// ************* Создание Map из объекта:
// let map = new Map(Object.entries(obj));

// ************* Создание Map из объекта:
// let obj = Object.fromEntries(map);


//********************************************* Set:

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

//********************************************* Перебор Set:

// let set = new Set(["апельсин", "яблоко", "банан"]);
//
// for (let value of set) console.log(value);
//
// console.log('********');
//
// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });