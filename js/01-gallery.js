import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);
galleryContainer.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href='#' disabled>
        <img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'/>
      </a>
      </div>`;
    })
    .join("");
}

function onGalleryItemClick(event) {
  console.log(event.target);
}

// console.log(galleryItems);
