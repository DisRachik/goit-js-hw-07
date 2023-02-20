import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = placeImageInGallery(galleryItems);

function placeImageInGallery(images) {
	return images
		.map(
			({ preview, original, description }) =>
				`<a class='gallery__item' href='${original}'>
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>`,
		)
		.join('');
}

let gallery = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});
