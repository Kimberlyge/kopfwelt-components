/* eslint no-unused-vars: 0 */

require('lazysizes');
const PopUp = require('../components/popup/script');
const Burger = require('../components/burger/script');
const fullscreen = require('../components/fullscreen/script');
const modernizrCustom = require('./vendor/modernizr-custom');

class Main {
	start() {
		const popup = new PopUp();
		const burger = new Burger();
		fullscreen.init();
	}
}

const main = new Main();
main.start();
