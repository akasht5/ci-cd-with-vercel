import profile from './profile';

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const submitBtn = document.querySelector('#submit');
const targetDiv = document.querySelector('#result');

submitBtn.addEventListener('click', () => {
  const results = profile(name.value, email.value, age.value);
  targetDiv.innerHTML = results;
});
