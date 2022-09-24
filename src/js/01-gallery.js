import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refGallery = document.querySelector('.gallery');

refGallery.style.listStyle = 'none';

galleryItems.forEach(item => {
  refGallery.insertAdjacentHTML(
    'beforeend',
    `<li>
<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a>
    </li>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
