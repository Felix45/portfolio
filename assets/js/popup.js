const projects = [
  {
    title: 'COVID-19 Tracker',
    roles: { company: 'Microverse', position: ['Full Stack Dev', '2022'] },
    image: 'assets/images/covid.png',
    alt: 'COVID-19 Tracker project screenshot',
    description: 'This web application provides statistical insights on COVID-19 cases around the world. The application allows users to filter through the information by different continents and countries.',
    skills: ['JSX', 'React', 'css', 'javascript', 'APIs'],
    skillsModal: ['JSX', 'css', 'javascript', 'React', 'ruby', 'Bootstrap', 'APIs'],
    livelink: { link: 'https://imaginative-liger-4aee95.netlify.app/', text: 'See live' },
    seesource: { link: 'https://github.com/Felix45/covid-stats', text: 'See Source' },
    seeproject: 'See Project',
    fulldesc: '',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Awsome Books',
    roles: { company: 'Library', position: ['Full Stack Dev', '2022'] },
    image: 'assets/images/awsomebooks.png',
    alt: 'Awsomebooks project screenshot',
    description: 'Is an online library application that enables users to keep track of books in their library by adding to and removing books from a list. Built with JavaScript ES6 syntax, HTML, and CSS.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github'],
    livelink: { link: 'http://felix45.github.io/awsome-books-v2', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/awsome-books-v2', text: 'See Source' },
    seeproject: 'See Project',
    fulldesc: 'Is an online library application that enables users to keep track of books in their library by adding to and removing books from a list. Built with JavaScript ES6 syntax, HTML, and CSS.',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Conference Website',
    roles: { company: 'Community Group', position: ['Full Stack Dev', '2022'] },
    image: 'assets/images/adopt-an-orphan.png',
    alt: 'Conference website project screenshot',
    description: 'This is a responsive website that provides information and the goal of a community-based organization.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'Ruby'],
    livelink: { link: 'https://felix45.github.io/adopt-an-orphan/', text: 'See live' },
    seesource: { link: 'https://github.com/Felix45/adopt-an-orphan', text: 'See Source' },
    seeproject: 'See Project',
    fulldesc: '',
    htmlClass: { article: ['grid-item', 'card', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },

  {
    title: 'Atari Breakout',
    roles: { company: 'Microverse', position: ['Lead Developer', '2022'] },
    image: 'assets/images/breakout.png',
    alt: 'Uber Navigation project screenshot',
    description: 'This is a browser game developed using JavaScript and HTML5 canvas. Its inspired by Atari Inc.s implementation of the same game.',
    skills: ['Javascript', 'html5', 'css', 'html5 canvas'],
    skillsModal: ['Javascript', 'html5', 'css', 'html5 canvas'],
    livelink: { link: 'https://felix45.github.io/Breakout/', text: 'See live' },
    seesource: { link: 'https://github.com/Felix45/Breakout', text: 'See Source' },
    seeproject: 'See Project',
    fulldesc: '',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },
];

const listItems = (items) => {
  let list = '';
  items.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  return list;
};

const createImageButton = (project, dest, srcLink) => {
  const link = document.createElement('a');
  link.className = 'btn';
  link.setAttribute('target', '_blank');
  link.textContent = `${dest.text} `;
  link.href = dest.link;
  const img = document.createElement('img');
  img.src = srcLink;
  img.alt = `${dest.text} Icon`;
  link.appendChild(img);

  return link;
};

const modalFooter = (project) => {
  const modalButtons = document.createElement('div');
  modalButtons.className = 'd-flex';
  const seeSourceButton = createImageButton(project, project.livelink, 'assets/images/Icon.svg');
  modalButtons.appendChild(seeSourceButton);
  const seeLiveButton = createImageButton(project, project.seesource, 'assets/images/sourcecode.svg');
  modalButtons.appendChild(seeLiveButton);

  return modalButtons;
};

const createRoles = (project) => {
  const cardRoleWrapper = document.createElement('div');
  cardRoleWrapper.className = 'project-role-wrapper';

  const cardRoleCompany = document.createElement('span');
  cardRoleCompany.textContent = project.roles.company;

  cardRoleWrapper.appendChild(cardRoleCompany);

  const cardRolePosition = document.createElement('ul');
  cardRolePosition.className = 'project-role';
  cardRolePosition.innerHTML = listItems(project.roles.position);

  cardRoleWrapper.appendChild(cardRolePosition);

  return cardRoleWrapper;
};

const createHeader = (project, titleElement) => {
  const cardHeader = document.createElement(titleElement);
  cardHeader.textContent = project.title;

  return cardHeader;
};

const createProjectCard = (project, position = null, isDesktop = true) => {
  const articleHolder = document.createElement('article');
  articleHolder.className = project.htmlClass.article.join(' ');
  const cardHeader = createHeader(project, 'h2');
  const cardRoleWrapper = createRoles(project);

  if (!isDesktop) {
    articleHolder.appendChild(cardHeader);
    articleHolder.appendChild(cardRoleWrapper);
  }

  const cardImage = document.createElement('div');
  cardImage.className = project.htmlClass.cardImage.join(' ');
  const Image = document.createElement('img');
  Image.src = project.image;
  Image.alt = project.alt;
  cardImage.appendChild(Image);

  if (!isDesktop) {
    cardImage.classList.remove('flex-item-2');
  }
  articleHolder.appendChild(cardImage);

  // New Column
  const cardDescription = document.createElement('div');
  cardDescription.className = project.htmlClass.cardDescription.join(' ');

  const cardTagWrapper = document.createElement('div');
  cardTagWrapper.className = 'tags-wrapper';

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'tags';

  const cardButton = document.createElement('a');
  cardButton.className = 'btn btn-project';

  if (position) {
    cardButton.setAttribute('data-position', position - 1);
  }

  const cardText = document.createElement('p');
  cardText.textContent = project.description;

  cardTagList.innerHTML = listItems(project.skills);
  const overLayText = project.fulldesc ? project.fulldesc : project.description;

  if (isDesktop) {
    cardDescription.appendChild(cardHeader);
    cardDescription.appendChild(cardRoleWrapper);
    cardText.textContent = project.description;
  } else if (document.documentElement.clientWidth <= 767) {
    cardText.textContent = overLayText;
  } else {
    cardText.textContent = overLayText;
    cardTagList.innerHTML = listItems(project.skillsModal);
  }
  cardTagWrapper.appendChild(cardTagList);
  cardDescription.appendChild(cardText);
  if (isDesktop) {
    cardButton.innerHTML = '<span>See Project</span>';
    cardTagWrapper.appendChild(cardButton);
  }
  cardDescription.appendChild(cardTagWrapper);
  articleHolder.appendChild(cardDescription);

  return articleHolder;
};

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#portfolio');

projects.forEach((project, index) => {
  const cardInstance = createProjectCard(project, index + 1, true);
  articleContainer.appendChild(cardInstance);
});
cardContainer.appendChild(articleContainer);

const closePopup = () => {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  overlay.innerHTML = '';
  document.querySelector('body').classList.toggle('fixed');
};

const overlayCloseButton = () => {
  const overlayCloseBtn = document.createElement('img');
  overlayCloseBtn.className = 'overlay-close';
  overlayCloseBtn.src = 'assets/images/overlay-close.svg';
  overlayCloseBtn.alt = 'Close modal button';

  overlayCloseBtn.addEventListener('click', closePopup);

  return overlayCloseBtn;
};

function showPopupWindow() {
  const position = parseInt(this.getAttribute('data-position'), 10);
  const modalContent = createProjectCard(projects[position], false, false);

  const overlay = document.querySelector('.overlay');
  const overlayCloseBtn = overlayCloseButton();
  const modalButtons = modalFooter(projects[position]);

  overlay.innerHTML = '';

  overlay.appendChild(modalContent);
  const tagsWrapper = document.querySelector('.overlay .tags-wrapper');
  tagsWrapper.appendChild(modalButtons);
  overlay.childNodes[0].appendChild(overlayCloseBtn);

  overlay.style.display = 'flex';
  document.querySelector('body').classList.toggle('fixed');
}

const btnProjects = document.querySelectorAll('.btn-project');

btnProjects.forEach((btnProject) => {
  btnProject.addEventListener('click', showPopupWindow);
});
