import exampleTemplate from '../templates/example.hbs';
import countries from './countries.json';
const galleryRef = document.querySelector('.js-gallery');

const myObj = {
  name: 'Швеция',
  capital: 'Стокгольм',
  currency: 'Шведская крона (SEK)',
  language: 'Шведский',
  population: 9723809,
  flag: 'https://wikiway.com/upload/iblock/5e3/800px-Flag_of_Sweden_svg.png',
  infected: true,
};

const result = exampleTemplate(myObj);
galleryRef.innerHTML = result;
