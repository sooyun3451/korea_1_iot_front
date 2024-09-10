let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  p.textContent = 'button clicked';
  console.log('Button clicked');
})