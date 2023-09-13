import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
//
container.insertAdjacentHTML('beforeend', markup);
//
function createMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" alt="${description}" class="gallery__image"/>
        </a>
        </li>`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

// console.log(galleryItems);

