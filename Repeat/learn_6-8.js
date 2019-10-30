// *********************************** setTimeout and setInterval

// --- setTimeout ---

// let timerId = setTimeout(func, [delay], [arg1], [arg2], ...)



// --- Отмена через clearTimeout ---

// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.

// let timerId = setTimeout(...);
// clearTimeout(timerId);



// --- setInterval ---

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)



// --- Рекурсивный setTimeout ---

// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// Рекурсивный setTimeout позволяет задать задержку между выполнениями более точно, чем setInterval.



// --- setTimeout с нулевой задержкой ---

// Это планирует вызов func настолько быстро, насколько это возможно.
// Но планировщик будет вызывать функцию только после завершения выполнения текущего кода.