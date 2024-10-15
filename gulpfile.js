const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

const js = () => {
	/// Convert to typeScript
	return src('./src/js/main.ts')
		.pipe(sourcemaps.init())
		.pipe(
			ts({
				noImplicitAny: true,
				outFile: 'main.min.js',
			}),
		)
		.pipe(sourcemaps.write())
    // Push to 
		.pipe(dest('dist/js'));
};

exports.default = js;
