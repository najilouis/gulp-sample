var gulp = require('gulp'),

	// sass = require('gulp-sass'),

	// autoprefixer = require('gulp-autoprefixer'),
	// cssMin = require('gulp-cssmin'),
	// sourcemaps = require('gulp-sourcemaps');
	// replace by gulp-load-plugins
	// npm install -save-dev gulp-load-plugins
	plugins = require('gulp-load-plugins')();

gulp.task('css', function() {
	//npm install gulp-sass --save-dev	
	// npm install gulp-sourcemaps gulp-cssmin gulp-autoprefixer --save
	gulp.src(['./src/sass/main.scss'])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.cssmin())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));	
});

gulp.task('default', function() {

	console.log('Look at my first gulp task!');

});