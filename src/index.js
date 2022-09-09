import Notiflix from 'notiflix';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import { render } from '../render';
import { fetchApi } from '../fetch-images';
import axios from 'axios';

const button = document.querySelector('.button');
const form = document.querySelector('.search-form');
const markup = document.querySelector('.gallery');
const input = document.querySelector('.input');
const API_KEY = '29596278-1db73915ee4ad13e2bf785c69';
const URL = 'https://pixabay.com/api/?key=29596278-1db73915ee4ad13e2bf785c69';
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
let page = 1;
const MYAPI_KEY = '29596278-1db73915ee4ad13e2bf785c69';
    const MYURL = 'https://pixabay.com/api/';

let simpleLightBox;
let perPage = 40;





form.addEventListener('submit', fetchFoo);

async function fetchFoo(event) {
  event.preventDefault();
  console.log(event);
  const inputValue = input.value.trim();
  let page = 1;

  if (inputValue) {
    


  gallery.innerHTML = '';
  loadMore.textContent = 'ты хочешь видеть больше картиночек?😚';


  axios.defaults.baseURL = MYURL;
 await axios.get(`?key=${MYAPI_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`).then(resp => {
    if (resp.data.hits.length === 0) {
         Notiflix.Report.failure('извините, вы ищите какую-то хрень');
    }
    
   
  //  try {
     
     
  //  } catch {
     
     
  //  }
   
   
   
   if (resp.data.hits.length > 0) {
     loadMore.classList.remove('is-hidden');
        render(resp.data.hits)
    simpleLightBox = new SimpleLightbox('.gallery a').refresh();
    Notiflix.Notify.success(`мы нашли ${resp.data.totalHits} картиночек`);
   }
   
  })
  } else if (!inputValue) {
    Notiflix.Report.failure('введите текст');
}
}











loadMore.addEventListener('click', loadMoreFunction);
async function loadMoreFunction() {
  loadMore.textContent = 'хочешь еще сладенький 😍🤭💕?';
  page += 1;
const inputValue = input.value;
 
   
     axios.defaults.baseURL = MYURL;
await axios.get(`?key=${MYAPI_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`).then(resp => {
    render(resp.data.hits)
  simpleLightBox = new SimpleLightbox('.gallery a').refresh();
  



 

     const totalPages = Math.ceil(resp.data.totalHits / perPage);
  console.log(resp.data.hits.length)
  console.log(totalPages)
      if (page > totalPages) {
        loadMore.classList.add('is-hidden');
        Notiflix.Notify.info(`у нас нет больше картиночек`);
      }
  
  })
   

  console.log(page);
}













// function render(oneImage) {
//   const markup = oneImage
//     .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//       return `<a class="photo-link" href="${largeImageURL}">
//         <img class="image" src="${webformatURL}" alt="${tags}" loading="lazy"  width="300" height="300"/>
//       </a>
//     <p class="info-item">
//       <b> Лайки: ${likes}</b>
//     </p>
//     <p class="info-item">
//       <b> Просмотры: ${views}</b>
//     </p>
//     <p class="info-item">
//       <b> Комментарии: ${comments}</b>
//     </p>
//     <p class="info-item">
//       <b> Загрузки: ${downloads}</b>
//     </p>
// `;
//     })
//     .join('');

//     gallery.insertAdjacentHTML('beforeend', markup);

// };
