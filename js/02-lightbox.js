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

// Реализация делегирования на ul.gallery и получение url большого изображения.
list.addEventListener("click", handleClick)

function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const instance = new SimpleLightbox('.gallery a')
    instance.show()

    instance.captionsData('alt')
    instance.captionPosition()
}