// ******************************* Деструктуризация массивов:
// let arr = ["Ilya", "Kantor"]
//
// let [firstName, surname] = arr;
//
// console.log(firstName); // Ilya
// console.log(surname);  // Kantor
//
//
//
// Можно использовать split:
//
// let [firstName, surname] = "Ilya Kantor".split(' ');
//
// Использование запятой "," для пропуска элементов
//
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// console.log( title ); // Consul
//
//
//
// В левой части может быть что угодно:
//
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');
//
// console.log(user.name); // Ilya
//
//
//
// Использование ... для остаточных значений
//
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// console.log(name1); // Julius
// console.log(name2); // Caesar
//
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2
//
//
//
// Если значений меньше, они останутся undefined:
//
// let [firstName, surname] = [];
//
// console.log(firstName); // undefined
// console.log(surname); // undefined
//
//
//
// Для предотвращения можно использовать значения по умолчанию:
//
// значения по умолчанию
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
//
// console.log(name);    // Julius (из массива)
// console.log(surname); // Anonymous (значение по умолчанию)
//
//
//
// Вложенная деструктуризация:
//
// let options = {
//   items: ["Cake", "Donut"],
// };
//
// let {
//   items: [item1, item2],
//   title = "Menu"
// } = options;
//
// console.log(title);  // Menu
// console.log(item1);  // Cake
// console.log(item2);  // Donut