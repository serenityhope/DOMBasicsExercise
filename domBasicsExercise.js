const portillos = document.getElementById('portillos');

const images = document.getElementsByTagName('img');

const center = document.getElementsByClassName('center');

const ginosEast = document.querySelector('div');
// Or
// const ginosEast = document.querySelector('#ginos');

const pTags = document.querySelectorAll('p');

const h1 = document.querySelector('h1');
// Or
// const h1 = document.querySelector('.center');

h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";

const others = document.querySelector('#others');
// Or
// const others = document.getElementById('#others');

others.innerHTML = `<h3>Other favorites</h3>`;

const aTag = document.querySelector('a');

aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

h1.classList.add('background', 'text-color');

h1.classList.remove('background');

const h4 = document.createElement('h4');

h4.innerText = "CHICAGO: A great place to eat!";

const body = document.querySelector('body');
body.prepend(h4);

const h5 = document.createElement('h5');

h5.innerText = "See you in the Windy City Sometime!";

aTag.insertAdjacentElement('afterend', h5);

const jaysBeef = document.querySelector('li');
// Or
// const jaysBeef = document.querySelector('ul li');
jaysBeef.remove();

// BONUS
// 14a
const divs = document.querySelectorAll('div');
// Or
// const divs = document.getElementsByTagName('div');

// 14b
for (div of divs){
  div.classList.toggle('background');
}
// A for loop could also be used

// 15a
const hungry = [
  "Thanks",
  "A",
  "Lot",
  "Now",
  "I",
  "Am",
  "Hungry"
];

// 15b
for (word of hungry){
  const span = document.createElement('span');
  span.innerText = word;
  body.append(span);
}
// Or you can use For loop




