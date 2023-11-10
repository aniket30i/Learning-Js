'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////
// Smooth scroll

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  // window.scrollTo(
  //    s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //modern browser
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////
//page navigation

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('LINK');
  });
});

// creating and inserting elements
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analtytics. <button class="btn btn--close--cookie">Got it!</button>';

header.prepend(message);

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

// Event listener for one event

const h1 = document.querySelector('h1');

const alert1 = function (e) {
  alert('addEventlistener: Great keep reading the heading');

  //h1.removeEventListener('mouseenter', alert1);
  //more ways to do the same available
};

h1.addEventListener('mouseenter', alert1);

setTimeout(() => h1.removeEventListener('mouseenter', alert1), 3000);
