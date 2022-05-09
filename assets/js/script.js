const mobileMenu = document.querySelector('.menu-wrapper .menu ul');
const menuItems = document.querySelectorAll('.toggle-menu');

const toggleMenu = () => {
  if (document.documentElement.clientWidth <= 767) {
    mobileMenu.classList.toggle('mobile-menu');
  }
};

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', toggleMenu); });
