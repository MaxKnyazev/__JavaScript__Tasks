// ****************************** JSON:
//
// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.
//
// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };
//
// let json = JSON.stringify(student);
//
// console.log(typeof json); // мы получили строку!
//
// console.log(json);
//
// /* выведет объект в формате JSON:
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": false,
//   "courses": ["html", "css", "js"],
//   "wife": null
// }
// */
//
//
//
// Вложенные объекты поддерживаются и преобразуются:
//
// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };
//
// console.log( JSON.stringify(meetup) );
// /* вся структура преобразована в строку:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */
//
//
//
// let json = JSON.stringify(value[, replacer, space])
//
// value
// Значение для кодирования.
// replacer
// Массив свойств для кодирования или функция соответствия function(key, value).
// space
// Дополнительное пространство (отступы), используемое для форматирования.
//
//
//
// Форматирование: space
//
// Третий аргумент в JSON.stringify(value, replacer, space) – это количество пробелов, используемых для удобного форматирования.