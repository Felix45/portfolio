const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: '/assets/images/snapshootportfolio.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/assets/images/project-4.svg',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },

  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/assets/images/tonic.svg',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
    image: '/assets/images/multi-stories-post.svg',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last', 'hide-ruby'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },
];

const dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`;

const listItems = (items) => {
  let list = '';
  items.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  return list;
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
}

const createHeader = (project, titleElement) => {
  const cardHeader = document.createElement(titleElement);
  cardHeader.textContent = project.title;

  return cardHeader;
}

const createProjectCard = (project, position = null, isDesktop = true) => {
  articleHolder = document.createElement('article');
  articleHolder.className = project.htmlClass.article.join(' ');
  const cardHeader = createHeader(project,'h2');
  const cardRoleWrapper = createRoles(project);

  if(!isDesktop) {
    articleHolder.appendChild(cardHeader);
    articleHolder.appendChild(cardRoleWrapper);
  }

  const cardImage = document.createElement('div');
  cardImage.className = project.htmlClass.cardImage.join(' ');
  const Image = document.createElement('img');

  if(isDesktop || document.documentElement.clientWidth <= 767) {
    Image.src = project.image;
    cardImage.appendChild(Image);
  }else {
    cardImage.style.height = `70vh`;
    cardImage.style.backgroundImage = `url(${project.image})`;
    cardImage.style.backgroundRepeat = `no-repeat`;
    cardImage.style.backgroundSize = `100%`;
    cardImage.style.backgroundPositionY = `-190px`;
    cardImage.style.backgroundPositionx = `center`;
  }
  articleHolder.appendChild(cardImage);

  // New Column
  const cardDescription = document.createElement('div');
  cardDescription.className = project.htmlClass.cardDescription.join(' ');

  const cardTagWrapper = document.createElement('div');
  cardTagWrapper.className = 'tags-wrapper';

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'tags';

  cardTagWrapper.appendChild(cardTagList);

  const cardButton = document.createElement('a');
  cardButton.className = 'btn btn-project';

  if (position){
    cardButton.setAttribute('data-position', position - 1);
  }

  cardButton.innerHTML = '<span>See Project</span>';

  const cardText = document.createElement('p');
  cardText.textContent = project.description;

  if(isDesktop) {
    cardDescription.appendChild(cardHeader);
    cardDescription.appendChild(cardRoleWrapper);
    cardText.textContent = project.description;
    cardTagList.innerHTML = listItems(project.skills);
  } else {
    cardText.textContent = dummyText;
    cardTagList.innerHTML = listItems(project.skillsModal);
  }
  cardDescription.appendChild(cardText);
  cardTagWrapper.appendChild(cardButton);
  cardDescription.appendChild(cardTagWrapper);
  

  articleHolder.appendChild(cardDescription);
  return articleHolder;
};

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#port');
//let articleHolder = null;

for (let i = 0; i < projects.length; i += 1) {
  const cardInstance = createProjectCard(projects[i], i + 1, true);
  articleContainer.appendChild(cardInstance);
}

cardContainer.appendChild(articleContainer);

//Popup window

function showPopupWindow() {
 console.log(this);
 const position  = parseInt(this.getAttribute('data-position'));
 const modalContent = createProjectCard(projects[position], false, false);
 console.log(modalContent);
 const overlay = document.querySelector('.overlay');
 overlay.innerHTML = '';
 overlay.appendChild(modalContent);
 overlay.style.display = 'flex';
}

const btnProjects = document.querySelectorAll('.btn-project');
btnProjects.forEach((btnProject) => {
  btnProject.addEventListener('click', showPopupWindow);
});








