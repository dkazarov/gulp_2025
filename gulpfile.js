const { src, dest, parallel, series } = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const clear = require('./tasks/clear');

const tsProject = ts.createProject('tsconfig.json');
const js = () => {
	/// Convert to typeScript
	return (
		src('./src/js/main.ts')
			.pipe(sourcemaps.init())
			.pipe(tsProject())
			.pipe(
				ts({
					noImplicitAny: true,
					outFile: 'main.min.js',
					target: 'ES6',
					removeComments: true,
					// // experimentalAsyncFunctions: true,
					// experimentalDecorators: true,
					allowJs: true,
				}),
			)
			.pipe(sourcemaps.write())
			// Push to
			.pipe(dest('dist/js'))
	);
};

exports.js = js;
exports.clear = clear;

// Паралельно
exports.default = parallel(js);
// Строго попорядку
exports.default = series(clear, js);
