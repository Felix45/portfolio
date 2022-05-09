const hambugerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.menu-wrapper .menu ul');
const closeMenu = document.querySelector('.close-icon');
const menuItems = document.querySelectorAll('.menu-item');

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu');
};

hambugerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => { menuItem.addEventListener('click', toggleMenu); });
