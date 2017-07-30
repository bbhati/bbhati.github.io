var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nestedCss = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, nestedCss, autoPrefixer, cssVars]))
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});