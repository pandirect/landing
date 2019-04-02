var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var sassFiles = 'scss/**/*.scss';

gulp.task('sass', function()
{
	gulp.src('scss/**/*.scss')
	  .pipe(sass())
	  .pipe(gulp.dest('css/'));
});

gulp.task('min', function () 
{
    return gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch',function() 
{  
    gulp.watch(sassFiles,['sass']);
});

gulp.task('jsmin', function () {
    gulp.src(['js/**/*.js', '!js/**/*.min.js'])
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/'));
});