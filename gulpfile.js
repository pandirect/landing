var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var sassFiles = 'bootstrap-scss/**/*.bootstrap-scss';

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('min', function () {
    return gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass']);
});

gulp.task('concat', function () {
    return gulp.src(['js/lib/*.js', 'js/jquery/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('jsmin', function () {
    return gulp.src('js/all.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/'));
});