import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
      return;
    }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`, options);
  instance.show();
};

// ----------------------------------------------------------------------------
const options = {
  onShow: instance => {
    console.log('Метод onShow викликаний');
    document.addEventListener('keydown', event => closeModalEsc(event, instance))
  },

  onClose: instance => {
    console.log('Метод onClose викликаний');
    document.removeEventListener('keydown', event => closeModalEsc(event, instance))
    console.log('Listener is deleted')
  }
};

function closeModalEsc(event, instance) {
  if (event.key === 'Escape') {
    instance.close();
  }
}

// ----------------------------------------------------------------------------
// const options = {
//   onShow: instance => {
//     console.log('Метод onShow викликаний');
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//           instance.close();
//         }
//     })
//   },
//   onClose: instance => {
//     console.log('Метод onClose викликаний');
//     document.removeEventListener('keydown', (event) => {
//         if (event.key === 'Escape') {
//           instance.close();
//         }
//     })
//   }
// };

// ----------------------------------------------------------------------------
// function handleClick(event) {
//     event.preventDefault();

//     if (!event.target.classList.contains('gallery__image')) {
//       return;
//     }

//     const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`);
//     instance.show();
//     document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       instance.close();
//       document.removeEventListener('keydown');
//     }
//   });
// };

// ----------------------------------------------------------------------------
// function handleClick(event) {
//     event.preventDefault();

//     if (!event.target.classList.contains('gallery__image')) {
//         return
//     }

//     const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`);
//     instance.show();
// };