const $ = require('jquery');
const EventEmitter = require('wolfy87-eventemitter');

export default class Burger extends EventEmitter {
	constructor() {
		super();
		$('.NavBurger').on('click', event => this.open(event));
	}

	// Close on esc
	keyDown(event) {
		if (event.which === 27) {
			this.close(event);
		}
	}

	open(event) {
		event.preventDefault();
		this.toggle(event);
		$(document).on('keydown.navburger', event => this.keyDown(event));
	}

	toggle(event) {
		const target = event.currentTarget.getAttribute('href');

		$(event.currentTarget).toggleClass('is-active');

		// If it is a fullwidth overlay, adding this could be useful
		// $('body').toggleClass('no-scroll');

		this.emitEvent('didToggle', [target]);
	}

	close() {
		$('.NavBurger').removeClass('is-active');
		$('body').removeClass('no-scroll');

		$(document).off('.navburger');
	}
}
