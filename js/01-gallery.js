import { galleryItems } from "./gallery-items.js";

// Change code below this line
const refs = {
  listGallery: document.querySelector(".gallery"),
  body: document.querySelector("body"),
};

let instance = null;

refs.listGallery.addEventListener("click", selectImg);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

refs.listGallery.innerHTML = createMarkup(galleryItems);

function selectImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    console.log("Oooops");
    return;
  }
  const urlOfOriginal = evt.target.dataset.source;

  createModal(urlOfOriginal);
}

function createModal(urlOfOriginal) {
  instance = basicLightbox.create(`
    <img src="${urlOfOriginal}" width="800" height="600">
`);
  instance.show();

  refs.body.addEventListener("keydown", closeModal);
}

function closeModal(evt) {
  if (evt.keyCode === 27 || evt.key === "Escape") {
    instance.close();
  } else {
    return;
  }
  refs.body.removeEventListener("keydown", closeModal);
}
