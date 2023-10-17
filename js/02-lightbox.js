import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from "./gallery-items.js";

// Change code below this line
const refs = {
  listGallery: document.querySelector(".gallery"),
  //   body: document.querySelector("body"),
};

// refs.listGallery.addEventListener("click", selectImg);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
        </li>`
    )
    .join("");
}

refs.listGallery.innerHTML = createMarkup(galleryItems);

console.log(SimpleLightbox);
