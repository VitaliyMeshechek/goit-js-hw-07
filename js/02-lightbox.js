import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
   listGallery: document.querySelector('.gallery'),
}

refs.listGallery.addEventListener('click', onOpenModal);
const imgGalleryMarkup = galleryColections(galleryItems);
refs.listGallery.insertAdjacentHTML("beforeend", imgGalleryMarkup);

function galleryColections(galleryItems) {
return galleryItems.reduce((acc, {preview, original, description}) => {
       return acc + `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>`
   },"");
   
};
console.log(galleryItems);

// let gallery = "";
function onOpenModal(evt) {
   evt.preventDefault();
   const clickImgEl = evt.target.classList.contains('gallery__image');
   if (!clickImgEl){
    return;
   }

   let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, enableKeyboard: true, captionPosition: 'bottom', overlay: true,});

};

// document.addEventListener('keydown', onCloseModal);

// function onCloseModal(evt) {
//  if (evt.code === 'Escape') {
//  }
// }
