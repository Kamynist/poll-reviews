export default class questionBase {
  id;
  answer = '';
  constructor(label) {
    this.label = label
  }

}

// class MyClass {
//   prop = value; // свойство
//   constructor(...) { // конструктор
//     // ...
//   }
//   method(...) {} // метод
//   get something(...) {} // геттер
//   set something(...) {} // сеттер
//   [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//   // ...
// }