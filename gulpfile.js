// watch - clean - reloading(BrowserSync)
var gulp = require('gulp'),

	plugins = require('gulp-load-plugins')();
	browserSync = require('browser-sync').create();

gulp.task('clean', function(){
	return gulp.src('./dist/**', {read: false})
	    .pipe(plugins.clean());
});

gulp.task('css', function() {	
	return gulp.src(['./src/sass/main.scss'])
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.cssmin())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./src/js/magic.js',
		'./src/js/admin.js'
		])		
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat('all.js'))
		.pipe(plugins.uglify())		
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());

});

gulp.task('watch', function(){
	gulp.watch(['./src/sass/*.scss'], ['css']);
	gulp.watch(['./src/js/*.js'], ['js']);
})

// npm install --save-dev gulp-clean
gulp.task('default', (['clean', 'css', 'js', 'watch', 'serve']));

// npm install --save-dev browser-sync
gulp.task('serve', function() {
	browserSync.init({		
		server: {
			baseDir: './'
		}
	});
	gulp.watch('*.html').on('change', browserSync.reload)
});