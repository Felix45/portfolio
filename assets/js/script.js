const hambugerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.menu-wrapper .menu ul');

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu');
};

hambugerMenu.addEventListener('click', toggleMenu);

const closeMenu = document.querySelector('.close-icon');
closeMenu.addEventListener('click', toggleMenu);
