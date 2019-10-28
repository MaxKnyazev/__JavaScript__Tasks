// ***************************** WeakMap:

// В WeakMap присутствуют только следующие методы:
//
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// let john = { name: "John" };
//
// let weakMap = new WeakMap();
// weakMap.set(john, "...");
//
// john = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!

// ***************************** WeakSet:

// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.