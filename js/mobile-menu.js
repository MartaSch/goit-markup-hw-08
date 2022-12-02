const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.mobile-menu__toggle');
const openMenuBtn = document.querySelector('.menu-button');
const blockmenuOverlay = document.querySelector('.body');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('d-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});

openMenuBtn.addEventListener('click', e => {
    blockmenuOverlay.classList.add('block');
  });
  closeMenuButton.addEventListener('click', e => {
    blockmenuOverlay.classList.remove('block');
  });