import Notiflix from "notiflix";
 import simpleLightbox from "simplelightbox";



const button = document.querySelector('.button');
const form = document.querySelector('.search-form');
const markup = document.querySelector('.gallery');
const input = document.querySelector('.input');
const API_KEY = '29596278-1db73915ee4ad13e2bf785c69'
const URL = 'https://pixabay.com/api/?key=29596278-1db73915ee4ad13e2bf785c69'
const gallery = document.querySelector('.gallery')
const loadMore = document.querySelector('.load-more')
let page = 1;



 form.addEventListener('submit', fetchFoo)



function fetchFoo(event) {
   
    event.preventDefault();
    console.log(event)
    const inputValue = input.value.trim();
    

    gallery.innerHTML = '';
    loadMore.textContent = 'ты хочешь видеть больше картиночек?😚'

  fetch(
      `${URL}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=6`
  )
      
      
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
      .then(data => {
        
          if (data.hits.length === 0) {
              Notiflix.Report.failure('извините, вы ищите какую-то хрень');
          }
          
          
        console.log(data)
          render(data.hits)
          Notiflix.Notify.success(`мы нашли ${data.hits.length} картинок`);
    })
      

    .catch(error => {
      console.log(error);
    });

   
};


function render(oneImage) {
  const markup = oneImage
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
  <img  src="${webformatURL}" alt="" loading="lazy"/>
  <div class="info">
    <p class="info-item">
      <b> Лайки: ${likes}</b>
    </p>
    <p class="info-item">
      <b> Просмотры: ${views}</b>
    </p>
    <p class="info-item">
      <b> Комментарии: ${comments}</b>
    </p>
    <p class="info-item">
      <b> Загрузки: ${downloads}</b>
    </p>
  </div>
</div>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
};











loadMore.addEventListener('click', loadMoreFunction);



function loadMoreFunction() {
    loadMore.textContent = 'хочешь еще сладенький 😍🤭💕?'
    page += 1
    // fetchFoo()



 fetch(
      `${URL}&q=${input.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=6`
  )
      
      
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
      .then(data => {
        
          if (data.hits.length === 0) {
              Notiflix.Report.failure('извините, вы ищите какую-то хрень');
          }
          
          
        console.log(data)
          render(data.hits)
          Notiflix.Notify.success(`мы нашли ${data.hits.length} картинок`);
    })
























    console.log(page)
}

















































