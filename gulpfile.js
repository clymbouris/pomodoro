///////////////////////////////
//       Configuration       //
///////////////////////////////

var gulp = require('gulp');

// Import Plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var copy = require('gulp-copy');
var rename = require('gulp-rename');
var minifycss = require('gulp-cssmin');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var ghPages = require('gulp-gh-pages');

// Source and Build path configuration
var path = {
	build: {
		js: 'build/js',
		css: 'build/css',
		html: 'build',
		img: 'build/img'
	},
	src: {
		js: 'src/js/**/*',
		scss: 'src/scss/**/*',
		css: 'src/css/**/*',
		html: 'src/*.html',
		img: 'src/img/**/*'
	}
};

//--| END OF 'Configuration' |--//


///////////////////////////////
//       Helper Tasks        //
///////////////////////////////

// Default
gulp.task('default', ['watch']);

// Watcher
gulp.task('watch', function(){
	// CSS styles
	gulp.watch(path.src.html, ['html']);
	gulp.watch(path.src.img, ['images']);
	gulp.watch(path.src.js, ['scripts']);
	gulp.watch(path.src.css, ['styles']);

});

// Cleanup
gulp.task('clean', function(){
	return del([path.build.js, path.build.css, 'build/*.html', path.build.img]);
});

// Deploy to gh-pages.
// Prerequisites: Add origin remote repo & push once
gulp.task('deploy', function() {
	return gulp.src('./build/**/*')
    	.pipe(ghPages());
});

//--| END OF 'Helper Tasks' |--//


///////////////////////////////
//      Styles Workflow      //
///////////////////////////////

gulp.task('styles', function(){
	return gulp.src(path.src.css)
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
		.pipe(concat('main.css'))
        .pipe(uncss({
        	html: path.src.html
        }))
        .pipe(minifycss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.build.css));
});

//--| END OF 'Styles Workflow' |--//


///////////////////////////////
//      Scripts Workflow     //
///////////////////////////////

gulp.task('scripts', ['jshint'], function(){
	return gulp.src(path.src.js)
		.pipe(sourcemaps.init())
			.pipe(concat('main.min.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js));
});

// JavaScript Linter
gulp.task('jshint', function(){
	return gulp.src(path.src.js)
		// If 'strict mode'; is enabled needs to be defined to pass lint
		.pipe(jshint({ strict: false }))
		.pipe(jshint.reporter('jshint-stylish'))
		// Only run dependent tasks if linting is success
		.pipe(jshint.reporter('fail'));
});

//--| END OF 'Scripts Workflow' |--//


///////////////////////////////
//       HTML Workflow       //
///////////////////////////////

gulp.task('html', function(){
	return gulp.src(path.src.html)
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true,
			ignoreCustomComments: [
    			/^\s+ko/,
    			/\/ko\s+$/
    		]
		}))
		.pipe(gulp.dest(path.build.html));
});

//--| END OF 'HTML Workflow' |--//


///////////////////////////////
//      Images Workflow      //
///////////////////////////////

gulp.task('images', function(){
	return gulp.src(path.src.img)
		.pipe(imagemin({
			optimizationLevel: 5, 
			progressive: true
		}))
		.pipe(gulp.dest(path.build.img));
});

//--| END OF 'Images Workflow' |--//


///////////////////////////////
//  Unused Plugin Examples   //
///////////////////////////////

// Unoptimized Files - Just to have everything working on the build folder
/* 
gulp.task('copy', function(){
	return gulp.src([Array of paths])
		// prefix option ignores /src from source path when copying
		.pipe(copy(path.build.html, { prefix: 1 }));
});
*/

// Image Resize Example (ImageMagick)
/*
gulp.task('image-resize', function(){
	return gulp.src(path.src.img)
    	.pipe(imageResize({ 
      		width: 360,
      		height: 270,
      		crop: true,
      		upscale: false,
      		imageMagick: true
    	}))
    	.pipe(gulp.dest(path.build.img));
});
*/

//--| END OF 'Unused Plugin Examples' |--//