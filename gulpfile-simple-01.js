var gulp = require('gulp'),

	sass = require('gulp-sass'),

	autoprefixer = require('gulp-autoprefixer'),
	cssMin = require('gulp-cssmin'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
	//npm install gulp-sass --save-dev
	//compile sass
	//output file to dist/ >
	//	// gulp.src(['./src/sass/main.scss'])
	//	// 	.pipe(sass().on('error', sass.logError))
	//	// 	.pipe(gulp.dest('./dist/css'));

	// npm install gulp-sourcemaps gulp-cssmin gulp-autoprefixer --save
	gulp.src(['./src/sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssMin())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));	


});

gulp.task('default', function() {

	console.log('Look at my first gulp task!');

});