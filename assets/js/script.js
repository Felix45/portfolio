const hambugerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.menu-wrapper .menu ul');

const showMenu = () => {
  mobileMenu.classList.add('mobile-menu');
};

hambugerMenu.addEventListener('click', showMenu);