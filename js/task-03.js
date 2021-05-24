const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const GalleryEl = img => {
  const { url, alt } = img;
  return `<li> <img src= ${url} alt= ${alt} width= 720 height = 480></li>`;
};

const gallerySet = images.map(GalleryEl);

const galleryAll = document.querySelector('#gallery');
galleryAll.insertAdjacentHTML('afterbegin', gallerySet);
galleryAll.style.listStyle = 'none';
galleryAll.style.display = 'flex row';
galleryAll.style.backgroundColor = '#fff', 'boxShadow = 0 2.8px 2.2px red, 0 6.7px 5.3px blue, 0 12.5px 10px green,0 22.3px 17.9px purple, 0 41.8px 33.4px orange, 0 100px 80px teal';
