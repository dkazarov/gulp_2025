const { src } = require('gulp');
var clean = require('gulp-clean');

const clear = () => {
	return src('dist', { read: false }).pipe(clean({ force: true }));
};

module.exports = clear;
