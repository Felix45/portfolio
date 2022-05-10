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

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#port');
let articleHolder = null;

for (let i = 0; i < projects.length; i += 1) {
  articleHolder = document.createElement('article');
  articleHolder.className = projects[i].htmlClass.article.join(' ');

  const cardImage = document.createElement('div');
  cardImage.className = projects[i].htmlClass.cardImage.join(' ');
  const Image = document.createElement('img');
  Image.src = projects[i].image;
  cardImage.appendChild(Image);
  articleHolder.appendChild(cardImage);

  // New Column
  const cardDescription = document.createElement('div');
  cardDescription.className = projects[i].htmlClass.cardDescription.join(' ');

  const cardHeader = document.createElement('h2');
  cardHeader.textContent = projects[i].title;

  const cardRoleWrapper = document.createElement('div');
  cardRoleWrapper.className = 'project-role-wrapper';

  const cardRoleCompany = document.createElement('span');
  cardRoleCompany.textContent = projects[i].roles.company;

  cardRoleWrapper.appendChild(cardRoleCompany);

  const cardRolePosition = document.createElement('ul');
  cardRolePosition.className = 'project-role';
  cardRolePosition.innerHTML = listItems(projects[i].roles.position);

  cardRoleWrapper.appendChild(cardRolePosition);

  const cardTagWrapper = document.createElement('div');
  cardTagWrapper.className = 'tags-wrapper';

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'tags';
  cardTagList.innerHTML = listItems(projects[i].skills);

  cardTagWrapper.appendChild(cardTagList);

  const cardButton = document.createElement('a');
  cardButton.className = 'btn';
  cardButton.innerHTML = '<span>See Project</span>';

  const cardText = document.createElement('p');
  cardText.textContent = projects[i].description;

  cardDescription.appendChild(cardHeader);
  cardDescription.appendChild(cardRoleWrapper);
  cardDescription.appendChild(cardText);
  cardDescription.appendChild(cardTagWrapper);
  cardDescription.appendChild(cardButton);

  articleHolder.appendChild(cardDescription);
  articleContainer.appendChild(articleHolder);
}

cardContainer.appendChild(articleContainer);