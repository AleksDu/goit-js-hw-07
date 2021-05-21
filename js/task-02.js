const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// const lists = document.createElement('li')
// const list = document.querySelector(".ingredients");


// const markup = ingredients.reduce(
//   (string, item) => string += `${item}`,
//   ""
// );


// console.log(markup);


// // lists.innerHTML = markup;
// lists.append(markup)
const list = document.querySelector('#ingredients');

const potato = document.createElement('li');
potato.textContent = 'Картопля';
const mushrooms = document.createElement('li');
mushrooms.textContent = 'Гриби';
const garlic = document.createElement('li');
garlic.textContent = 'Часник'
const tomatoes = document.createElement('li');
tomatoes.textContent = 'Помідори';
const green = document.createElement('li');
green.textContent = 'Зелень';
const prepare = document.createElement('li');
prepare.textContent = 'Приправи';

list.append(potato, mushrooms, garlic, tomatoes, green, prepare);