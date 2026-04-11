const btn = document.querySelector('#menuBtn');
const menu = document.querySelector('#navMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

localStorage.setItem('visited', 'true');