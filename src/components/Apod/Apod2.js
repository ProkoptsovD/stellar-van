import { fetchPictures } from '../../js/fetchImages.js';

const APOD_BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const refs = {
	apod: document.querySelectorAll('[data-apod]'),
};

window.addEventListener('load', onWindowLoadFetchPicture);

export function onWindowLoadFetchPicture() {
	fetchPictures(APOD_BASE_URL).then(handleData).catch(console.log);
}

function handleData(data) {
	refs.apod.forEach((elem) => setValue(elem, data));
	return data;
}

function setValue(elem, { copyright, title, url, hdurl }) {
	const screenWidth = window.screen.width;

	switch (elem.dataset.apod) {
		case 'apod-bg':
			elem.setAttribute(
				'style',
				`'background-image: url(${screenWidth >= 1200 ? hdurl : url})`
			);
			break;
		case 'title':
			elem.textContent = title;
			break;
		case 'copyright':
			elem.textContent = copyright ? `by ${copyright}` : '';
			break;
		default:
			return;
	}
}
