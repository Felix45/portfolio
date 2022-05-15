const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: 'assets/images/snapshootportfolio.svg',
    alt: 'Canopy project screenshot',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'http://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: 'assets/images/project-4.svg',
    alt: 'Multi-Post stories project screenshot',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },

  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: 'assets/images/tonic.svg',
    alt: 'Facebook 360 project screenshot',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'https://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
    image: 'assets/images/multi-stories-post.svg',
    alt: 'Uber Navigation project screenshot',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'https://felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'http://github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },
];

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
const mobileText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';

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

  if (isDesktop || document.documentElement.clientWidth <= 767) {
    Image.src = project.image;
    Image.alt = project.alt;
    cardImage.appendChild(Image);
  } else {
    cardImage.style.height = '568px';
    cardImage.style.backgroundImage = `url(${project.image})`;
    cardImage.style.backgroundRepeat = 'no-repeat';
    cardImage.style.backgroundSize = '95%';
    cardImage.style.backgroundPositionY = '-250px';
    cardImage.style.backgroundPositionX = '18px';

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

  if (isDesktop) {
    cardDescription.appendChild(cardHeader);
    cardDescription.appendChild(cardRoleWrapper);
    cardText.textContent = project.description;
  } else if (document.documentElement.clientWidth <= 767) {
    cardText.textContent = mobileText;
  } else {
    cardText.textContent = dummyText;
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
  const heading = document.querySelector('.overlay article h2');
  tagsWrapper.appendChild(modalButtons);
  heading.appendChild(overlayCloseBtn);

  overlay.style.display = 'flex';
  document.querySelector('body').classList.toggle('fixed');
}

const btnProjects = document.querySelectorAll('.btn-project');

btnProjects.forEach((btnProject) => {
  btnProject.addEventListener('click', showPopupWindow);
});