
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//complete scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./mystyles/**/*.scss')
  // 2. pass that file through sass compiler
    .pipe(sass())
  // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./mystyles'))
  // 4. stream change to all browsers
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    port: 3002,
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./mystyles/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
