//strict mode
"use strict";

let resetButton = document.getElementById('reset-button');
let noodleOne = document.getElementById('noodleBallOne');
let noodleTwo = document.getElementById('noodleBallTwo');
let chopstickOne = document.getElementById('stick1');
let chopstickTwo = document.getElementById('stick2');

noodleOne.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("hello");

  noodleOne.classList.remove('noodle-animation1');
  // keeps the width of the element.
  void noodleOne.offsetWidth;
  noodleOne.classList.add('noodle-animation1');

  noodleTwo.classList.remove('noodle-animation2');
  void noodleTwo.offsetWidth;
  noodleTwo.classList.add('noodle-animation2');

  chopstickOne.classList.remove('chopstickOne');
  void chopstickOne.offsetWidth;
  chopstickOne.classList.add('chopstickOne');

  chopstickTwo.classList.remove('chopstickTwo');
  void chopstickTwo.offsetWidth;
  chopstickTwo.classList.add('chopstickTwo');

}, false);