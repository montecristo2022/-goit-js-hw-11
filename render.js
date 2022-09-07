export { render };

    const gallery = document.querySelector('.gallery');
    
function render(oneImage) {
  const markup = oneImage
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
      
 <div class="main">
      <a class="photo-link" href="${largeImageURL}">
        <img class="image" src="${webformatURL}" alt="${tags}" loading="lazy"  width="300" height="300"/>
      </a>
   <div class="info">
    <p class="info-item">
      <b> Лайки:
       ${likes}</b>
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
 </div>
`;
    })
    .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    
};









