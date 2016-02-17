const $ = require('jquery');

// Smooth scrolling instead of jumping
function scroll(event) {
	event.preventDefault();

	const $active = $(event.currentTarget);
	const offset = $($active.attr('href')).offset();

	$('html, body').animate({
		scrollTop: offset.top
	}, 400);
}

// Add animation when img is loaded
function addClassWhenLoaded() {
	const img = document.querySelector('.Fullscreen img');

	function loaded() {
		document.querySelector('html').classList.add('is-ready');
	}

	if (img.complete) {
		loaded();
	} else {
		img.addEventListener('load', loaded);
	}
}

function actions() {
	addClassWhenLoaded();
	$('.Fullscreen-scroll').on('click', event => scroll(event));
}

module.exports = {init: actions};
