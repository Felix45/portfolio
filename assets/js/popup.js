const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: '/assets/images/snapshootportfolio.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
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
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },

  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: '/assets/images/tonic.svg',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-2'], cardImage: ['card-image'], cardDescription: ['card-description'] },
  },

  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
    image: '/assets/images/multi-stories-post.svg',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    livelink: 'felix45.github.io/portfolio',
    seesource: 'github.com/felix45/portfolio',
    seeproject: 'See Project',
    htmlClass: { article: ['grid-item', 'card', 'flex-item-3', 'flex-item-last'], cardImage: ['card-image', 'flex-item-2'], cardDescription: ['card-description', 'flex-item-1'] },
  },
];

const listItems = (items) => {
  let list = '';
  items.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  return list;
};

const createProjectCard = (project, position = null) => {
  articleHolder = document.createElement('article');
  articleHolder.className = project.htmlClass.article.join(' ');

  const cardImage = document.createElement('div');
  cardImage.className = project.htmlClass.cardImage.join(' ');
  const Image = document.createElement('img');
  Image.src = project.image;
  cardImage.appendChild(Image);
  articleHolder.appendChild(cardImage);

  // New Column
  const cardDescription = document.createElement('div');
  cardDescription.className = project.htmlClass.cardDescription.join(' ');

  const cardHeader = document.createElement('h2');
  cardHeader.textContent = project.title;

  const cardRoleWrapper = document.createElement('div');
  cardRoleWrapper.className = 'project-role-wrapper';

  const cardRoleCompany = document.createElement('span');
  cardRoleCompany.textContent = project.roles.company;

  cardRoleWrapper.appendChild(cardRoleCompany);

  const cardRolePosition = document.createElement('ul');
  cardRolePosition.className = 'project-role';
  cardRolePosition.innerHTML = listItems(project.roles.position);

  cardRoleWrapper.appendChild(cardRolePosition);

  const cardTagWrapper = document.createElement('div');
  cardTagWrapper.className = 'tags-wrapper';

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'tags';
  cardTagList.innerHTML = listItems(project.skills);

  cardTagWrapper.appendChild(cardTagList);

  const cardButton = document.createElement('a');
  cardButton.className = 'btn btn-project';
  if (position){
    cardButton.setAttribute('data-position', position - 1);
  }
  cardButton.innerHTML = '<span>See Project</span>';

  const cardText = document.createElement('p');
  cardText.textContent = project.description;

  cardDescription.appendChild(cardHeader);
  cardDescription.appendChild(cardRoleWrapper);
  cardDescription.appendChild(cardText);
  cardDescription.appendChild(cardTagWrapper);
  cardDescription.appendChild(cardButton);

  articleHolder.appendChild(cardDescription);
  return articleHolder;
};

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#port');
//let articleHolder = null;

for (let i = 0; i < projects.length; i += 1) {
  const cardInstance = createProjectCard(projects[i], i + 1);
  articleContainer.appendChild(cardInstance);
}

cardContainer.appendChild(articleContainer);

//Popup window

function showPopupWindow() {
 console.log(this);
 const position  = parseInt(this.getAttribute('data-position'));
 const modalContent = createProjectCard(projects[position]);
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








