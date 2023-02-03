const menuButton = document.getElementById('menu_btn');
const closeMenu = document.getElementById('close_menu');
const hideMenu = document.getElementById('hideb');
const mobileMenu = document.getElementById('mobile_menu');
menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('show');
  menuButton.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  menuButton.classList.remove('mobile_menu');
  menuButton.style.display = 'flex';
});

hideMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  menuButton.style.display = 'flex';
});