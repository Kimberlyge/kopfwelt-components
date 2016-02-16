/* eslint no-unused-vars: 0 */
const $ = require('jquery');
require('magnific-popup');

export default class PopUp {
	constructor() {
		this.openPopUp();
	}

	openPopUp() {

		const $overlays = $('.js-popupOverlay');

		$overlays.magnificPopup({
			type: 'ajax',
			src: '.Popup'
		});

	}
}
