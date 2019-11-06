// ***************************** Async/await:

// --- Асинхронные функции ---

// Пример асинхронной функции:

// async function f() {
//   return 1;
// }
//
// f().then(alert); // 1



// --- Await ---

// работает только внутри async–функций
// let value = await promise;


// async function f() {
//
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });
//
//   let result = await promise; // будет ждать, пока промис не выполнится (*)
//
//   console.log(result); // "готово!"
// }
//
// f();

// Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку:



// --- Обработка ошибок ---

// async function f() {
//   await Promise.reject(new Error("Упс!"));
// }

// Тоже самое:

// async function f() {
//   throw new Error("Упс!");
// }



// --- async/await и promise.then/catch ---

// При работе с async/await, .then используется нечасто, так как await автоматически ожидает завершения выполнения промиса.
// В этом случае обычно (но не всегда) гораздо удобнее перехватывать ошибки, используя try..catch, нежели чем .catch.



// --- async/await отлично работает с Promise.all ---

// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);

