// ******************************************** Promise API:

// --- Promise.all ---

// let promise = Promise.all([...промисы...]);

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log);

// Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.
// В случае ошибки, остальные результаты игнорируются



// --- Promise.allSettled ---

// Метод Promise.allSettled всегда ждёт завершения всех промисов.



// --- Promise.race ---

// Метод очень похож на Promise.all, но ждёт только первый промис, из которого берёт результат (или ошибку).

// let promise = Promise.race(iterable);

