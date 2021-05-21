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

const list = document.querySelector('#gallery');


list.insertAdjacentHTML('afterbegin', '<li> <img>  </li > ');
    const image = document.createElement('img')
image.setAttribute('src', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
image.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
document.body.append(list)
list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

