  // fetch(
  //   `${URL}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  // )
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }

  //     return response.json();
  //   })
  //   .then(data => {
  //     if (data.hits.length === 0) {
  //       Notiflix.Report.failure('извините, вы ищите какую-то хрень');
  //     }

  //     console.log(data);
  //     render(data.hits);
  //     Notiflix.Notify.success(`мы нашли ${data.totalHits} картиночек`);
  //     simpleLightBox = new SimpleLightbox('.gallery a').refresh();
  //   })

  //   .catch(error => {
  //     console.log(error);
  //   });







  


   // fetch(
  //   `${URL}&q=${input.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  // )
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }

  //     return response.json();
  //   })
  //   .then(data => {
  //     if (data.hits.length === 0) {
  //       Notiflix.Report.failure('извините, вы ищите какую-то хрень');
  //     }

  //     console.log(data);
  //     render(data.hits);
  //     Notiflix.Notify.success(`мы загрузили дополнительно ${data.hits.length} картинок`);
  //     simpleLightBox = new SimpleLightbox('.gallery a').refresh();
  //   });