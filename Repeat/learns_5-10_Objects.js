// ******************************* Деструктуризация объектов:
//
// let {var1, var2} = {var1:…, var2:…}
//
//
//
// let options = {
//    title: "Menu",
//    width: 100,
//    height: 200
//  };
//
//  let {title, width, height} = options;
//
//  console.log(title);  // Menu
//  console.log(width);  // 100
//  console.log(height); // 200
//
//
//
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// let {width: w, height: h, title} = options;
//
// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200
//
//
//
// Значения по умолчанию:
//
// let options = {
//   title: "Menu"
// };
//
// let {width: w = 100, height: h = 200, title} = options;
//
// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200
//
//
//
// Остаток объекта превращается в объект:
//
// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };
//
// let {title, ...rest} = options;
//
// console.log(rest.height);  // 200
// console.log(rest.width);   // 100
//
//
//
// Вложенная деструктуризация:
//
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   }
// };
//
// let {
//   size: {
//     width,
//     height
//   },
//   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;
//
// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200