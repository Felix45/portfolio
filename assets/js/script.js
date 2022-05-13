const mobileMenu = document.querySelector('.menu-wrapper .menu ul');
const menuItems = document.querySelectorAll('.toggle-menu');
const statusbar = document.querySelector('.status-bar');
const mobileBody = document.querySelector('body');

const toggleMenu = () => {
  if (document.documentElement.clientWidth <= 767) {
    mobileMenu.classList.toggle('mobile-menu');
    mobileBody.classList.toggle('fixed');
    statusbar.classList.toggle('status-bar-fixed');
  }
};

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', toggleMenu); });

const displayFixedMenu = () => {
  const header = document.querySelector('header');
  const isFixed = this.window.scrollY > 200 ? header.classList.add('header-fixed') : header.classList.remove('header-fixed');

  return isFixed;
};

window.addEventListener('scroll', displayFixedMenu);
