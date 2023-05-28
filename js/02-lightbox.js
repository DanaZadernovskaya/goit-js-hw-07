import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}" />
   </a>
</li>
  `;
};
const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
gallery.innerHTML = galleryItemsMarkup;
const gallery2 = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});