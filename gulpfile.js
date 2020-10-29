const gulp = require('gulp'), sass = require('gulp-sass'); 
// const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./scss/**/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('./css'))
}

function watch () {
    gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;