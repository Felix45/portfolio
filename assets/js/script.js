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

const addMenuContextualClasses = (sections) => {
  const links = document.querySelectorAll('.menu ul li a');
  const divOffset = 144;
  links.forEach((el) => el.classList.remove('active'));

  if (window.scrollY >= sections[0].offsetTop
    && window.scrollY <= (sections[0].offsetTop + sections[0].offsetHeight)) {
    links[0].classList.add('active');
  } else if (window.scrollY >= sections[1].offsetTop
    && window.scrollY <= (sections[1].offsetTop + sections[1].offsetHeight - divOffset)) {
    links[1].classList.add('active');
  } else if (window.scrollY >= sections[2].offsetTop - divOffset
    && window.scrollY <= (sections[2].offsetTop + sections[2].offsetHeight)) {
    links[2].classList.add('active');
  }
};

const displayFixedMenu = () => {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('.page-section');

  const isFixed = this.window.scrollY > 200 ? header.classList.add('header-fixed') : header.classList.remove('header-fixed');

  if (document.documentElement.clientWidth >= 767) {
    addMenuContextualClasses(sections);
  }

  return isFixed;
};

window.addEventListener('scroll', displayFixedMenu);
