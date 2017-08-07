var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var order = require("gulp-order");
var browserSync = require('browser-sync');
var minify = require('gulp-minify');

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src([
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/owl-carousel/owl-carousel.css",
        "bower_components/owl-carousel/owl.transitions.css"
    ])
        .pipe(concat('assets.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
    return gulp.src([
        "js/*.js",
        "js/all.js"
    ])
        .pipe(concat('javascript.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});

gulp.task('js-assets', function(){
    return gulp.src([
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/javascript-equal-height-responsive-rows/grids.min.js",
        "bower_components/owl-carousel/owl-carousel.min.js"
    ])
        .pipe(concat('js-assets.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('css/*.css', ['css']);
	gulp.watch('scss/*.scss', ['scss']);
	gulp.watch('js/**/*.js', ['js']);
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('js/*.js', ['js']);
});
