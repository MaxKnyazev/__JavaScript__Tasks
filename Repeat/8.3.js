// ******************************************* Встроенные прототипы

// Свойство "prototype" широко используется внутри самого языка JavaScript. Все встроенные функции-конструкторы используют его.
//
// Сначала мы рассмотрим детали, а затем используем "prototype" для добавления встроенным объектам нового функционала.



// --- Другие встроенные прототипы ---

// Другие встроенные объекты, такие как Array, Date, Function и другие, также хранят свои методы в прототипах.



// --- Примитивы ---

// Самое сложное происходит со строками, числами и булевыми значениями.
//
//   Как мы помним, они не объекты. Но если мы попытаемся получить доступ к их свойствам,
//   то тогда будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean,
//   который предоставит методы и после этого исчезнет.
//
//   Эти объекты создаются невидимо для нас, и большая часть движков оптимизирует этот процесс, но спецификация описывает это именно таким образом.
//   Методы этих объектов также находятся в прототипах, доступных как String.prototype, Number.prototype и Boolean.prototype.



// --- Изменение встроенных прототипов ---

// Встроенные прототипы можно изменять. Например, если добавить метод к String.prototype, метод становится доступен для всех строк:
//
//   String.prototype.show = function() {
//     alert(this);
//   };
//
// "BOOM!".show(); // BOOM!



// В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.
//
// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.



// --- Заимствование у прототипов ---

// Это когда мы берём метод из одного объекта и копируем его в другой.
//
// Некоторые методы встроенных прототипов часто одалживают.
//
// Например, если мы создаём объект, похожий на массив (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.