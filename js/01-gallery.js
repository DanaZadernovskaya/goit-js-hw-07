import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
// 1
const gallery = document.querySelector('.gallery');
const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};
const galleryItemsMarkup = galleryItems.map(createGalleryItemMarkup).join('');
gallery.innerHTML = galleryItemsMarkup;
// 2
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const largeImageURL = target.dataset.source;
    openModal(largeImageURL);
  }
});
function openModal(imageURL) {
  const instance = basicLightbox.create(`
    <img src="${imageURL}" width="800" height="600">
  `);

  instance.show();
  const closeOnEscape = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  document.addEventListener('keydown', closeOnEscape);
  instance.element().addEventListener('click', () => {
    instance.close();
    document.removeEventListener('keydown', closeOnEscape);
  });
}