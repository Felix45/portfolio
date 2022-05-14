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
  const section = document.querySelectorAll('.page-section');

  const isFixed = this.window.scrollY > 200 ? header.classList.add('header-fixed') : header.classList.remove('header-fixed');

  const links = document.querySelectorAll('.menu ul li a');
  links.forEach((el) => el.classList.remove('active'));

  if (window.scrollY >= section[0].offsetTop
    && window.scrollY <= (section[0].offsetTop + section[0].offsetHeight)) {
    links[0].classList.add('active');
  } else if (window.scrollY >= section[1].offsetTop
    && window.scrollY <= (section[1].offsetTop + section[1].offsetHeight)) {
    links[1].classList.add('active');
  } else if (window.scrollY >= section[2].offsetTop
    && window.scrollY <= (section[2].offsetTop + section[2].offsetHeight)) {
    links[2].classList.add('active');
  }

  return isFixed;
};

window.addEventListener('scroll', displayFixedMenu);
