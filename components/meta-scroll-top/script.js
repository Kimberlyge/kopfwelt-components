const $ = require('jquery');

export default class Scrolltop {
	constructor() {
		$('a[href="#top"]').click(event => this.scrollToTop(event));
	}

	scrollToTop(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 400);
	}
}
