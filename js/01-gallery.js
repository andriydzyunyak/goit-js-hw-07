import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);
galleryContainer.addEventListener("click", onGalleryItemClick);
document.addEventListener("keydown", onCloseModal);

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
  const modal = basicLightbox.create(`
      <img src='${event.target.dataset.source}' width="800" height="600">
  `);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.show();

  document.addEventListener("keydown", onCloseModal);

  function onCloseModal(event) {
    if (event.code === "Escape") {
      modal.close();
    }
    document.removeEventListener("keydown", onCloseModal);
  }
}
