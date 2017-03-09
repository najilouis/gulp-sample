// https://school.scotch.io/using-gulp-as-a-build-system
var gulp = require('gulp'),

	plugins = require('gulp-load-plugins')();

gulp.task('css', function() {	
	return gulp.src(['./src/sass/main.scss'])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.cssmin())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));	
});

gulp.task('js', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./src/js/magic.js',
		'./src/js/admin.js'
		])
		// npm install --save-dev gulp-uglify
		// npm install --save-dev gulp-concat		
		.pipe(plugins.concat('all.js'))
		.pipe(plugins.uglify())				
		.pipe(gulp.dest('./dist/js'));

});

gulp.task('default', function() {

	console.log('Look at my first gulp task!');

});