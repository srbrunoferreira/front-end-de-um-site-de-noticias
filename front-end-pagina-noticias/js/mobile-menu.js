var openMenuBtn = document.getElementsByClassName('btn-open-menu')[0];
var closeMenuBtn = document.getElementsByClassName('btn-close-menu')[0];
var nav = document.getElementById('mnav');

openMenuBtn.addEventListener('click', () => {
  nav.classList.add('show-main-nav');
});

closeMenuBtn.addEventListener('click', () => {
  nav.classList.remove('show-main-nav');
});
