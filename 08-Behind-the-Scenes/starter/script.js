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

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
console.log(this.firstName);
