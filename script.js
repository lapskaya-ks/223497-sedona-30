const formButton = document.querySelector('.form-button');
const form = document.querySelector('.search-form');

formButton.addEventListener('click', () => {
  form.classList.toggle('visually-hidden');
})
