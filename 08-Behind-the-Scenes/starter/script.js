'use strict';

// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'Aniket';
// let job = 'Engineer';
// const year = 1991;

// // console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// // function addDecl(a, b) {
// //   return a + b;
// // }

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// // const addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 30;

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// console.log(this.firstName);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
console.log('1');

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
console.log('2');

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
// completely new object where all the properties are of jessica2 are copied
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
// real copy , a new object is created and jessicaCopy is pointing towards it.

//This is a shallow copy the object inside the object then the inner object will still be the same pointing to the previous memory location

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
