// ********************************************* Флаги и дескрипторы свойств

// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
//
// Его синтаксис:
//
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj - Объект, из которого мы получаем информацию.
// propertyName - Имя свойства.



// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
//
// Его синтаксис:
//
// Object.defineProperty(obj, propertyName, descriptor)
// obj, propertyName:
// Объект и его свойство, для которого нужно применить дескриптор.



// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.

// Object.defineProperties(obj, {
//   prop1: descriptor1,
//   prop2: descriptor2
//   // ...
// });

// Например:
//   Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     // ...
//   });



// --- Object.getOwnPropertyDescriptors ---

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).
//
// Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:
//
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));



// --- Глобальное запечатывание объекта: ---
// Дескрипторы свойств работают на уровне конкретных свойств.
//
// Но ещё есть методы, которые ограничивают доступ ко всему объекту:
//
// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

//   А также есть методы для их проверки:

//
// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.

// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.