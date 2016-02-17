const gulp = require('gulp');
const i18next = require('i18next');
const FilesystemBackend = require('i18next-node-fs-backend');
const sprintf = require('i18next-sprintf-postprocessor');
const util = require('gulp-util');

/**
 * Task to initial i18next asynchronously
 */

// util.env automatically picks up any arguments
// e.g. if you run `gulp templates --locale=de` it'll change to German
const locale = (util.env.locale ? util.env.locale : 'en');

const i18nTask = callback => {
	const options = {
		lng: locale,
		fallbackLng: 'en',
		load: 'currentOnly',
		backend: {
			loadPath: './app/locales/{{lng}}/{{ns}}.json',
			addPath: './app/locales/{{lng}}/{{ns}}.missing.json'
		},
		// debug options
		saveMissing: true,
		debug: false,
		// debug: process.env.NODE_ENV !== 'production',
		nsSeparator: '.',
		defaultNS: 'global',
		ns: [
			'global',
			'nav',
			'splash'
		]
	};

	i18next
		.use(FilesystemBackend)
		.use(sprintf)
		.init(options, err => {
			if (err) {
				console.log(err);
				return;
			}

			callback();
		});
};

// gulp.task('i18n', i18nTask);

module.exports = i18nTask;
