// input field js

const numAholder = document.querySelector('#numA');
const numBHolder = document.querySelector('#numB');
const sumHolder = document.querySelector('#sum');

let numA = 20;
let numB = 3;
let sum = numA + numB;

numAholder.value = numA;
numBHolder.value = numB;
sumHolder.value = sum;

const amountHolder = document.querySelector('#amount');
const rateHolder = document.querySelector('#rate');
const cediHolder = document.querySelector('#cedi-equivalent');

let dollarRate = 9.8
let amount = 200;
let cediEquivalent = dollarRate * amount;
   cediEquivalent = "GHS" + cediEquivalent;

   amountHolder.value = amount;
   rateHolder.value = dollarRate;
   cediHolder.value = cediEquivalent;