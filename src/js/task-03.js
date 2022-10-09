const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imgeEl = document.querySelector('.gallery');

const gallery = images.map(element => {

  const galleryEl = document.createElement('li');
  const galleryImg = document.createElement('img');

  // galleryImg.setAttribute('scr', element.url)

  galleryImg.src = element.url;
  galleryImg.width = '360';
  galleryImg.height = '240';
  galleryImg.alt = element.alt;

  galleryEl.append(galleryImg);

  return galleryEl;
});



imgeEl.append(...gallery);
