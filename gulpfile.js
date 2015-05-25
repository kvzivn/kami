var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    stylus = require('gulp-stylus');

gulp.task('styles', function() {
  return gulp.src('src/stylesheets/styles.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
      lost(),
      autoprefixer('last 2 versions')
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/stylesheets'));
});

gulp.watch('src/stylesheets/*.styl', ['styles']);

gulp.task('default', ['styles']);