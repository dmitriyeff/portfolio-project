var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var jsonminify = require('gulp-jsonminify');
var imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: './mystyles/**/*.scss',
    dest: 'assets/styles/'
  },
  scripts: {
    src: './scripts/**/*.js',
    dest: 'assets/scripts/'
  },
  jsonmin: {
    src: './projects/**/*.json',
    dest: 'build/projects/'
  },
  views: {
    src: './views/**/*.html',
    dest: 'build/views/'
  },
  images: {
    src: './img/**/*.{jpg,jpeg,png}',
    dest: 'build/img/'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}

/*
 * Define our tasks using plain functions
 */
 function images() {
   return gulp.src(paths.images.src, {since: gulp.lastRun(images)})
   .pipe(imagemin({optimizationLevel: 5}))
   .pipe(gulp.dest(paths.images.dest));
 }

function views() {
  return gulp.src(paths.views.src)
        .pipe(gulp.dest(paths.views.dest));
}

function jsonmin() {
   return gulp.src(paths.jsonmin.src)
       .pipe(jsonminify())
       .pipe(gulp.dest(paths.jsonmin.dest));
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  browserSync.init({
    port: 3001,
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.styles.src, styles);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch(paths.scripts.src, scripts);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts, jsonmin, views, images));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.jsonmin = jsonmin;
exports.views = views;
exports.images = images;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;
