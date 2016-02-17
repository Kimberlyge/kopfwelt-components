const i18n = require('i18next');

module.exports.register = handlebars => {
	handlebars.registerHelper('t', key => {
		const result = i18n.t(key);
		return new handlebars.SafeString(result);
	});
};
