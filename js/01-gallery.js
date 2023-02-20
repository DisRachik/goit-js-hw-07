import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const placeImageInGallery = function (images) {
	return images
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item">
          <a class='gallery__link' href='${original}'>
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </div>`,
		)
		.join('');
};

const onImageClick = function (evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== 'IMG') {
		return;
	}
	showLargeImage(evt.target.dataset.source);
};

const showLargeImage = function (linkImg) {
	const instance = basicLightbox.create(`<img src='${linkImg}'>`);

	instance.show();

	const closeLargeImageOnKeyboard = function (evt) {
		if (evt.code === 'Escape') {
			document.removeEventListener('keydown', closeLargeImageOnKeyboard);
			instance.close();
		}
	};

	document.addEventListener('keydown', closeLargeImageOnKeyboard);
};

galleryEl.innerHTML = placeImageInGallery(galleryItems);
galleryEl.addEventListener('click', onImageClick);
