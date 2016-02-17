// Templates with handlebars-layout

const gulp = require('gulp');
const hb = require('gulp-hb');
const layouts = require('handlebars-layouts');
hb.handlebars.registerHelper(layouts(hb.handlebars));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const browserSync = require('./serve');
const util = require('gulp-util');
const locale = (util.env.locale ? util.env.locale : 'en');

gulp.task('handlebars', () => {
	return gulp.src('app/*.html')
		.pipe(hb({
			data: 'app/templates/data/**/*.{js,json}',
			helpers: 'app/templates/helpers/*.js',
			partials: [
				// 'app/templates/*.hbs',
				'app/components/**/*.hbs'
			],
			// debug: true,
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))

		// On all languages except the default "en" we translate filenames.
		// e.g. for `gulp templates --locale=de` it would be --> contact.html --> de/kontakt.html
		.pipe(rename(path => {
			if (locale !== 'en') {
				// const filename = i18next.t(path.basename);
				// path.basename = `${locale}/${filename}`;
				path.basename = `${locale}/${path.basename}`;
			}
		}))
		.pipe(gulp.dest('.tmp'))
		.pipe(browserSync.stream());
});
