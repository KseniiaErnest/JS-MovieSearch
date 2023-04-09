'use strict'
const searchInput = document.querySelector('#search');
const movies = document.querySelectorAll('.item-box');

searchInput.addEventListener('keyup', (event) => {
const userInputValue = event.target.value.toLowerCase();

movies.forEach(eachElement => {
  eachElement.querySelector('p').textContent.toLowerCase().includes(userInputValue) ? (eachElement.style.display = 'block') : (eachElement.style.display = 'none');
})
});