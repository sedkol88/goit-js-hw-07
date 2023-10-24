import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) =>       
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

document.addEventListener('DOMContentLoaded', function() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    });
});